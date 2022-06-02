import { Button } from 'grommet';
import styled from 'styled-components';

export const AddPersonContainer = styled.div`
  width: 100%;
`;

export const FormButton = styled(Button)`
  border-width: 1px;
  border-color: transparent;
  border-radius: 0;

  &:active,
  &:hover {
    border: 1px solid var(--accent);
    box-shadow: none;
  }
`;
