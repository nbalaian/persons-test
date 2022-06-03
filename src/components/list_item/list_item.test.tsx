import { waitFor, render, screen } from '@testing-library/react';
import { ListItem, ListItemProps } from './list_item';
import userEvent from '@testing-library/user-event';

export const defaultListItemProps: ListItemProps = {
  person: {
    name: 'Test Name',
    id: 777,
    org_name: 'Google',
  },
  onClick: jest.fn(),
};

describe('ListItem component tests', () => {
  const renderComponent = (): void => {
    render(<ListItem {...defaultListItemProps} />);
  };

  it('should render component and display person data', async () => {
    renderComponent();

    expect(
      screen.getByText(defaultListItemProps.person.name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultListItemProps.person.org_name)
    ).toBeInTheDocument();
  });

  it('should open details modal if user click on list item', async () => {
    renderComponent();

    const wrapper = screen.getByTestId('list-item-wrapper');

    expect(wrapper).toBeInTheDocument();
    userEvent.click(wrapper);

    await waitFor(() => {
      expect(defaultListItemProps.onClick).toBeCalled();
    });
  });
});
