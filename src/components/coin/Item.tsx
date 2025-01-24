import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ICoinItemProps {
  id: string;
  name: string;
  symbol: string;
}

const Item = styled.li`
  background-color: ${(props) => props.theme.subColor};
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 10px;
  border-radius: 15px;

  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CoinItem = ({ id, name, symbol }: ICoinItemProps) => {
  return (
    <Item>
      <Link to={`${id}`} state={{ name }}>
        <Img
          src={`https://static.coinpaprika.com/coin/${id}/logo.png`}
          alt={symbol}
        />

        <span>{name}</span>
      </Link>
    </Item>
  );
};

export default CoinItem;
