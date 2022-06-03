import { render, screen } from '@testing-library/react';
import { List } from './list';
import { ListItem } from '../list_item/list_item';
import { defaultListItemProps } from '../list_item/list_item.test';

describe('List component tests', () => {
  const renderComponent = (): void => {
    render(
      <List>
        <ListItem {...defaultListItemProps} />
      </List>
    );
  };

  it('should render component and display person item', async () => {
    renderComponent();

    expect(
      screen.getByText(defaultListItemProps.person.name)
    ).toBeInTheDocument();
  });
});
