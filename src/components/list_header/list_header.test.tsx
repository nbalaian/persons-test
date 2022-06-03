import { waitFor, render, screen } from '@testing-library/react';
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

  it('should render component and display person list header', async () => {
    renderComponent();

    const title = `People's List`;
    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('should open add person modal if user click on add person button', async () => {
    renderComponent();

    const addBtn = screen.getByText('Add person');

    expect(addBtn).toBeInTheDocument();
    userEvent.click(addBtn);

    await waitFor(() => {
      expect(defaultProps.openAddPersonModal).toBeCalled();
    });
  });

  it('should enter search term and call search people', async () => {
    renderComponent();

    const inputElement: HTMLElement =
      screen.getByPlaceholderText('Filter by name');

    userEvent.type(inputElement, 'test');

    await waitFor(() => {
      expect(inputElement).toHaveValue('test');
    });

    expect(defaultProps.searchPeople).toBeCalled();
  });
});
