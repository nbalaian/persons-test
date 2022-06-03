import { waitFor, render, screen } from '@testing-library/react';
import { AddPerson, AddPersonProps } from './add_person';
import userEvent from '@testing-library/user-event';

describe('AddPerson component tests', () => {
  const defaultProps: AddPersonProps = {
    loadPeople: jest.fn(),
    closeModal: jest.fn(),
  };

  const renderComponent = (): void => {
    render(<AddPerson {...defaultProps} />);
  };

  it('should render component and display add person form', async () => {
    renderComponent();

    expect(screen.getByTestId('add-person-form')).toBeInTheDocument();
  });

  it('should enter name, delete it and disable the button', async () => {
    renderComponent();

    const inputElement: HTMLInputElement = screen.getByLabelText('Name');
    expect(inputElement).toBeInTheDocument();

    userEvent.type(inputElement, 'New Person Name');

    await waitFor(() => {
      expect(inputElement).toHaveValue('New Person Name');
    });

    inputElement.setSelectionRange(0, 15);
    userEvent.type(inputElement, '{backspace}');

    await waitFor(() => {
      expect(inputElement).toHaveValue('');
    });

    expect(
      screen.getByRole('button', {
        name: 'Submit form',
      })
    ).toBeDisabled();
  });

  it('should enter name, reset it when user click reset form and disable the button', async () => {
    renderComponent();

    const inputElement: HTMLInputElement = screen.getByLabelText('Name');
    expect(inputElement).toBeInTheDocument();

    userEvent.type(inputElement, 'New Person Name');

    await waitFor(() => {
      expect(inputElement).toHaveValue('New Person Name');
    });

    const resetButton = screen.getByTestId('reset');

    userEvent.click(resetButton);

    await waitFor(() => {
      expect(inputElement).toHaveValue('');
    });

    expect(
      screen.getByRole('button', {
        name: 'Submit form',
      })
    ).toBeDisabled();
  });

  // test for select and call onSubmit
});
