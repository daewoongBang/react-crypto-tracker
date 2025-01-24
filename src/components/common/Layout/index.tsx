import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > .header {
    padding: 5px;
    background-color: #ececec;
  }

  & > main {
    margin: 0 auto;
    max-width: 450px;
    flex: 1;
  }

  & > .footer {
    padding: 10px;
    background-color: #e5e5e5;
    font-size: 12px;
    text-align: center;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
