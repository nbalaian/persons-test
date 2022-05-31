import * as Styled from './header.styled';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Styled.Header>
      <Styled.Logo>
        <img src={logo} alt='pipedrive logo' />
      </Styled.Logo>
    </Styled.Header>
  );
}
