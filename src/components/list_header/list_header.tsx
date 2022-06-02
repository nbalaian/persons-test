import { useState } from 'react';
import { Heading, Tip } from 'grommet';
import * as Styled from './list_header.styled';
import { Search } from 'grommet-icons';

export interface ListHeaderInterface {
  searchPeople: (value: string) => void;
  openAddPersonModal: () => void;
}

export function ListHeader({
  searchPeople,
  openAddPersonModal,
}: ListHeaderInterface) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    searchPeople(value);
  };

  return (
    <Styled.Wrapper>
      <Heading margin='none' level='2'>
        People's List
      </Heading>
      <Styled.Actions>
        <Styled.SearchContainer>
          {/* <Styled.SearchTip content='you should enter at least 2 characters'> */}
          <Styled.Search
            data-testid='search-input'
            icon={<Search />}
            placeholder='Filter by name'
            value={searchTerm}
            onChange={handleChange}
          />
          {/* </Styled.SearchTip> */}
        </Styled.SearchContainer>
        <Styled.AddBtn label='Add person' onClick={openAddPersonModal} />
      </Styled.Actions>
    </Styled.Wrapper>
  );
}
