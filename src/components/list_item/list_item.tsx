import { Heading } from 'grommet';
import { Organization } from 'grommet-icons';
import { Person } from '../../api/interfaces';
import * as Styled from './list_item.styled';

interface ListItemProps {
  person: Person;
}

export function ListItem({ person }: ListItemProps) {
  return (
    <Styled.Wrapper>
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
        <img src='https://i.pravatar.cc/100' alt='avatar' />
      </Styled.Avatar>
    </Styled.Wrapper>
  );
}
