import { Layer } from 'grommet';
import { List } from '../components/list/list';
import { ListHeader } from '../components/list_header/list_header';
import { Pagination } from '../components/pagination/pagination';
import { usePeople } from '../hooks/use_people_hook';

export function People() {
  const {
    people,
    isLoading,
    searchTerm,
    searchPeople,
    isMoreItems,
    isPrevActive,
    fetchNext,
    fetchPrev,
  } = usePeople();
  const t = () => console.log('fff');
  return (
    <>
      <ListHeader
        searchTerm={searchTerm}
        searchPeople={searchPeople}
        openAddPersonModal={t}
      />
      <List data={people} isLoading={isLoading} />
      <Pagination
        isPrevActive={isPrevActive}
        isNextActive={isMoreItems}
        onNextClick={fetchNext}
        onPrevClick={fetchPrev}
      />
      {/* <Layer
        onEsc={() => setShow(false)}
        onClickOutside={() => setShow(false)}
      ></Layer> */}
      {/* two modals */}
    </>
  );
}
