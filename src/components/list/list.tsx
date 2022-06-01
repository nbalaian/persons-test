import { Spinner } from 'grommet';
import { ListItem } from '../list_item/list_item';
import { Person } from '../../api/interfaces';
import { v4 as uuid } from 'uuid';
import * as Styled from './list.styled';

interface ListProps {
  data: Person[];
  isLoading: boolean;
}

export function List({ data, isLoading }: ListProps) {
  return (
    <Styled.Container>
      {isLoading ? (
        <Styled.LoaderWrapper>
          <Spinner size='large' />
        </Styled.LoaderWrapper>
      ) : data?.length > 0 ? (
        data.map((person: Person) => {
          return <ListItem key={uuid()} person={person} />;
        })
      ) : (
        <div> There are no people </div>
      )}
    </Styled.Container>
  );
}
