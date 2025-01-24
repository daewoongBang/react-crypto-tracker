import { useQuery } from '@tanstack/react-query';
import { getCoinDetail } from 'apis/coin';
import Loading from 'components/common/Loading';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

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

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #5d5d5d;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
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

const CoinDetail = () => {
  const { coinId } = useParams() as { coinId: string };
  const { state } = useLocation();

  const { isLoading: isLoadingCoinInfo, data: coinInfo } = useQuery<IInfo>({
    queryKey: ['coinInfo', coinId],
    queryFn: () => getCoinDetail(coinId),
  });

  console.log(coinInfo);

  return (
    <div>
      <SubTitle>{state?.name || coinInfo?.name || ''}</SubTitle>

      {!isLoadingCoinInfo ? (
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
              <span>Open Source:</span>
              <span>{coinInfo?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>

          <Description>{coinInfo?.description}</Description>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CoinDetail;
