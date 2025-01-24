import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import { isDarkModeAtom } from 'state/theme';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  & > p {
    font-size: 24px;
    font-weight: 600;
  }

  & > ul {
    display: flex;
    gap: 20px;

    > li {
      border-radius: 10px;

      & > a {
        padding: 10px;
      }

      &:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;

const Header = () => {
  const [isDarkMode, setDarkMode] = useAtom(isDarkModeAtom);

  const onClickChangeTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <HeaderContainer>
      <p>CRYPTO</p>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/coin'>Coins</Link>
        </li>
      </ul>

      <button onClick={onClickChangeTheme}>
        {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </HeaderContainer>
  );
};

export default Header;
