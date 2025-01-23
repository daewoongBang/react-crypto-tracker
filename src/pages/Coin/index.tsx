import CoinList from 'components/coin/List';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  margin: 20px 0;
`;

const CoinPage = () => {
  return (
    <div>
      <Title>Coin List</Title>

      <CoinList />
    </div>
  );
};

export default CoinPage;
