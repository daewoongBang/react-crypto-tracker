import styled from 'styled-components';

const HeaderContainer = styled.div`
  & > ul {
    display: flex;
    gap: 5px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer className='header'>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Coin</button>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
