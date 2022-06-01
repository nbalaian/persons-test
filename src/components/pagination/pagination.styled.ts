import styled from 'styled-components';
import { Next, Previous } from 'grommet-icons';

export const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 10px;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const IconPrev = styled(Previous)<{ $isActive: boolean }>`
  ${({ $isActive }) =>
    !$isActive &&
    `
  opacity: 0.6;
  cursor: disabled;
  pointer-events: none;
  `}
`;

export const IconNext = styled(Next)<{ $isActive: boolean }>`
  ${({ $isActive }) =>
    !$isActive &&
    `
  opacity: 0.6;
  cursor: disabled;
  pointer-events: none;
  `}
`;
