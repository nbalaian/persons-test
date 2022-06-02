import { Button } from 'grommet';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 45%;
  min-width: 450px;
  box-shadow: 0 0 5px 1px var(--primary-color);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--gray);
  background-color: var(--light-gray);
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid var(--gray);
  background-color: var(--light-gray);
`;

export const ModalBtn = styled(Button)`
  padding: 7px 20px;
  border: 1px solid var(--primary-color);
  background-color: var(--secondary-color);

  &:hover,
  &:active {
    border: 1px solid var(--accent);
    box-shadow: 0 0 0 1px var(--accent);
  }
`;
