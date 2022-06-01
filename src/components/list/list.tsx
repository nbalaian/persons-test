import * as Styled from './list.styled';

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
