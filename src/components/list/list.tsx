import { Spinner } from 'grommet';
import { ListItem } from '../list_item/list_item';
import { Person } from '../../api/interfaces';

interface ListProps {
  data: Person[];
  isLoading: boolean;
}

export function List({ data, isLoading }: ListProps) {
  return (
    <div>
      {isLoading && <Spinner />}
      {data.length > 0 ? (
        data.map((person: Person) => {
          return (
            <div>
              <ListItem key={person.id} person={person} />
            </div>
          );
        })
      ) : (
        <div> There are no people </div>
      )}
    </div>
  );
}
