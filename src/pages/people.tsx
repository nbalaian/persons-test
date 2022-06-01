import { Layer } from 'grommet';
import { List } from '../components/list/list';
import { ListHeader } from '../components/list_header/list_header';
import { Pagination } from '../components/pagination/pagination';
import { usePeople } from '../hooks/use_people_hook';
import { Spinner } from 'grommet';
import { ListItem } from '../components/list_item/list_item';
import { v4 as uuid } from 'uuid';
import * as Styled from './people.styled';
import { Person } from '../api/interfaces';
import { useState } from 'react';
import debounce from 'lodash.debounce';

export function People() {
  const {
    people,
    isLoading,
    loadPeople,
    searchPeople,
    isMoreItems,
    isPrevActive,
    fetchNext,
    fetchPrev,
  } = usePeople();

  const [addPersonModalIsOpen, setAddPersonModalIsOpen] =
    useState<boolean>(false);

  const onSearchChange = debounce((term: string) => {
    if (term.length > 1) {
      searchPeople(term);
    } else {
      loadPeople();
    }
  }, 300);

  return (
    <>
      <ListHeader
        searchPeople={onSearchChange}
        openAddPersonModal={() => setAddPersonModalIsOpen(true)}
      />
      <List>
        {isLoading ? (
          <Styled.LoaderWrapper>
            <Spinner size='large' />
          </Styled.LoaderWrapper>
        ) : people?.length > 0 ? (
          people.map((person: Person) => {
            return <ListItem key={uuid()} person={person} />;
          })
        ) : (
          <div> There are no people </div>
        )}
      </List>
      <Pagination
        isPrevActive={isPrevActive}
        isNextActive={isMoreItems}
        onNextClick={fetchNext}
        onPrevClick={fetchPrev}
      />
      {addPersonModalIsOpen && (
        <Layer
          onEsc={() => setAddPersonModalIsOpen(false)}
          onClickOutside={() => setAddPersonModalIsOpen(false)}
        >
          add person
        </Layer>
      )}

      {/* two modals */}
    </>
  );
}
