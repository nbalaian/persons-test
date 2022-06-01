import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 255px);
`;
