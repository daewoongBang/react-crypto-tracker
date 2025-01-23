import { useQuery } from '@tanstack/react-query';
import { getCoins } from 'apis/coin';
import Loading from 'components/common/Loading';
import CoinItem from './Item';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const CoinList = () => {
  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ['getCoins'],
    queryFn: getCoins,
  });

  return !isLoading ? (
    <ul>
      {data?.slice(0, 100).map((coin) => (
        <CoinItem
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
        />
      ))}
    </ul>
  ) : (
    <Loading />
  );
};

export default CoinList;
