import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  & > ul {
    display: flex;
    gap: 10px;

    > li {
      &:hover {
        color: #6262ff;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer className='header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/coin'>Coin</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
