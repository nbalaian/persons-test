import { useState } from 'react';
import { Heading } from 'grommet';
import * as Styled from './list_header.styled';
import { Search } from 'grommet-icons';

export function ListHeader() {
  const [value, setValue] = useState('');

  const addPerson = () => {
    console.log('add');
  };

  return (
    <Styled.Wrapper>
      <Heading margin='none' level='2'>
        People's List
      </Heading>
      <Styled.Actions>
        <Styled.SearchContainer>
          <Styled.Search
            icon={<Search />}
            placeholder='Filter by name'
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Styled.SearchContainer>
        <Styled.AddBtn label='Add person' onClick={addPerson} />
      </Styled.Actions>
    </Styled.Wrapper>
  );
}
