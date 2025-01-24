import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

export interface IQuotesProps {
  USD: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number;
    ath_date: string;
    percent_from_price_ath: number;
  };
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;

  & > div {
    min-width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    padding: 12px 30px;
    background-color: ${(props) => props.theme.subColor};
    color: ${(props) => props.theme.mainColor};
    border-radius: 5px;

    & > p:first-child {
      font-size: 12px;
    }
  }
`;

const CoinPrice = () => {
  const { USD } = useOutletContext<IQuotesProps>();

  return (
    <Container>
      <div>
        <p>시가총액</p>
        <p>{USD.market_cap}</p>
      </div>

      <div>
        <p>시가총액 변화율(24h)</p>
        <p>{USD.market_cap_change_24h}</p>
      </div>

      <div>
        <p>거래량(24h)</p>
        <p>{USD.volume_24h}</p>
      </div>

      <div>
        <p>거래량 변화율(24h)</p>
        <p>{USD.volume_24h_change_24h}</p>
      </div>
    </Container>
  );
};

export default CoinPrice;
