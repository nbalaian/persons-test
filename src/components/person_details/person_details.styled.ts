import styled from 'styled-components';

export const PersonDetailsContainer = styled.div`
  width: 100%;
  min-height: 410px;
`;

export const PersonAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
`;

export const PersonNumber = styled.div`
  margin-bottom: 20px;
  color: var(--accent);
  font-weight: 600;
  text-align: center;
`;

export const PersonInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  border-top: 1px solid var(--light-gray);
  font-size: 1rem;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
