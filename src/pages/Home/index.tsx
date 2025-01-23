import styled from 'styled-components';

const Wrapper = styled.div`
  & > p {
    font-size: 36px;
    font-weight: 700;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <p>Welcome, Crypto Tracker!</p>
    </Wrapper>
  );
};

export default Home;
