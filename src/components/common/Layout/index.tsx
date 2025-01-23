import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > .header {
    padding: 5px;
    background-color: #ececec;
  }

  & > main {
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

      <main>Hello Crypto Tracker!</main>

      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
