import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import { getCoinHistory } from 'apis/coin';
import Chart from 'react-apexcharts';
import Loading from 'components/common/Loading';
import { useAtomValue } from 'jotai';
import { isDarkModeAtom } from 'state/theme';

interface IOutletProps {
  coinId: string;
}

interface ICoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const CoinChart = () => {
  const { coinId } = useOutletContext<IOutletProps>();

  const isDarkMode = useAtomValue(isDarkModeAtom);

  const { isLoading, data } = useQuery<ICoinHistory[]>({
    queryKey: ['coinHistory', coinId],
    queryFn: () => getCoinHistory(coinId),
  });

  return !isLoading ? (
    <div>
      <Chart
        type='candlestick'
        series={[
          {
            data:
              data?.map((price) => ({
                x: price.time_close,
                y: [price.open, price.high, price.low, price.close],
              })) || [],
          },
        ]}
        options={{
          theme: {
            mode: isDarkMode ? 'dark' : 'light',
          },
          chart: {
            width: 500,
            height: 500,
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: true },
            type: 'datetime',
            categories: data?.map((price) => price.time_close),
          },
          stroke: {
            width: 3,
          },
        }}
      />
    </div>
  ) : (
    <Loading />
  );
};

export default CoinChart;
