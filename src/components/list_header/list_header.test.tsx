import { waitFor, render, screen, act } from '@testing-library/react';
import { ListHeader, ListHeaderInterface } from './list_header';
import userEvent from '@testing-library/user-event';

describe('ListHeader component tests', () => {
  const defaultProps: ListHeaderInterface = {
    openAddPersonModal: jest.fn(),
    searchPeople: jest.fn(),
  };

  const renderComponent = (): void => {
    render(<ListHeader {...defaultProps} />);
  };

  it('should render component and display person data', async () => {
    renderComponent();

    const title = `People's List`;
    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('should open details modal if user click on list item', async () => {
    renderComponent();

    const addBtn = screen.getByText('Add person');

    expect(addBtn).toBeInTheDocument();
    userEvent.click(addBtn);

    await waitFor(() => {
      expect(defaultProps.openAddPersonModal).toBeCalled();
    });
  });

  // test for user input search
});
