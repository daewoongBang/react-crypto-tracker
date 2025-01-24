import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCoinDetail, getCoinPrice } from 'apis/coin';
import Loading from 'components/common/Loading';

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
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
  };
}

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #5d5d5d;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #dcdde1;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: #dcdde1;
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor} a {
    display: block;
  }
`;

const TabNavLink = styled(NavLink)`
  &.active {
    font-weight: 700;
    color: ${(props) => props.theme.accentColor};
  }
`;

const CoinDetail = () => {
  const { coinId } = useParams() as { coinId: string };
  const { state } = useLocation();

  const { isLoading: isLoadingCoinInfo, data: coinInfo } = useQuery<IInfo>({
    queryKey: ['coinInfo', coinId],
    queryFn: () => getCoinDetail(coinId),
  });

  const { isLoading: isLoadingPriceInfo, data: priceInfo } = useQuery<IPrice>({
    queryKey: ['coinPriceInfo', coinId],
    queryFn: () => getCoinPrice(coinId),
    refetchInterval: 10000,
  });

  return (
    <div>
      <SubTitle>{state?.name || coinInfo?.name || ''}</SubTitle>

      {!isLoadingCoinInfo || !isLoadingPriceInfo ? (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coinInfo?.rank}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Symbol:</span>
              <span>${coinInfo?.symbol}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Price:</span>
              <span>${priceInfo?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>

          <Description>{coinInfo?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab>
              <TabNavLink to={`chart`}>Chart</TabNavLink>
            </Tab>

            <Tab>
              <TabNavLink to={`price`}>Price</TabNavLink>
            </Tab>
          </Tabs>

          <Outlet context={{ coinId }} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CoinDetail;
