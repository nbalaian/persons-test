import { Button, TextInput, Tip } from 'grommet';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid var(--gray, #000);
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
`;

export const AddBtn = styled(Button)`
  height: 46px;
  padding: 8px 22px;
  border-color: var(--accent);
  text-transform: capitalize;

  &:hover {
    border-color: var(--accent-lighter);
    box-shadow: 0 0 0 1px var(--gray);
  }
`;

export const SearchContainer = styled.div`
  max-width: 250px;
  margin-right: 10px;
`;

export const Search = styled(TextInput)`
  height: 46px;
  border-radius: 18px;
`;

export const SearchTip = styled(Tip)`
  font-size: 10px;
`;
