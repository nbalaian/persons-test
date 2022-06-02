import { waitFor, render, screen, act } from '@testing-library/react';
import { ListItem, ListItemProps } from './list_item';
import userEvent from '@testing-library/user-event';

describe('ListItem component tests', () => {
  const defaultProps: ListItemProps = {
    person: {
      name: 'Test Name',
      id: 777,
      org_name: 'Google',
    },
    onClick: jest.fn(),
  };
  const renderComponent = (): void => {
    render(<ListItem {...defaultProps} />);
  };

  it('should render component and display person data', async () => {
    renderComponent();

    expect(screen.getByText(defaultProps.person.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.person.org_name)).toBeInTheDocument();
  });

  it('should open details modal if user click on list item', async () => {
    renderComponent();

    const wrapper = screen.getByTestId('list-item-wrapper');

    expect(wrapper).toBeInTheDocument();
    userEvent.click(wrapper);

    await waitFor(() => {
      expect(defaultProps.onClick).toBeCalled();
    });
  });
});
