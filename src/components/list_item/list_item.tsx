import { Heading } from 'grommet';
import { Organization, User } from 'grommet-icons';
import { Person } from '../../api/interfaces';
import * as Styled from './list_item.styled';

export interface ListItemProps {
  person: Person;
  onClick: () => void;
}

export function ListItem({ person, onClick }: ListItemProps) {
  return (
    <Styled.Wrapper onClick={onClick} data-testid='list-item-wrapper'>
      <Styled.Info>
        <Heading margin='none' level='5'>
          {person.name}
        </Heading>
        <Styled.Organization>
          <Organization size='small' />
          <Styled.OrganizationName>{person.org_name}</Styled.OrganizationName>
        </Styled.Organization>
      </Styled.Info>
      <Styled.Avatar>
        {/* add image if source exists */}
        <User size='large' />
      </Styled.Avatar>
    </Styled.Wrapper>
  );
}
