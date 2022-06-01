import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
  padding: 15px;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Organization = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray);
  font-size: 1rem;
`;

export const OrganizationName = styled.span`
  margin-left: 5px;
`;

export const Avatar = styled.div`
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
  }
`;
