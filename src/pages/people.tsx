import { List } from '../components/list/list';
import { ListHeader } from '../components/list_header/list_header';
import { usePeople } from '../hooks/use_people_hook';

export function People() {
  const { people, isLoading } = usePeople();
  return (
    <>
      <ListHeader />
      <List data={people} isLoading={isLoading} />
      {/* pagination */}
    </>
  );
}
