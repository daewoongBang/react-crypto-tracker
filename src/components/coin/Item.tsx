import styled from 'styled-components';

interface ICoinItemProps {
  id: string;
  name: string;
  symbol: string;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #ecebeb;
  color: #313131;
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 20px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CoinItem = ({ id, name, symbol }: ICoinItemProps) => {
  return (
    <Item>
      <Img
        src={`https://static.coinpaprika.com/coin/${id}/logo.png`}
        alt={symbol}
      />

      <span>{name}</span>
    </Item>
  );
};

export default CoinItem;
