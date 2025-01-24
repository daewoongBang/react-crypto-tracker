import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from 'components/common/Layout';
import ErrorPage from 'pages/Error';
import CoinPage from 'pages/Coin';
import CoinList from 'components/coin/List';
import CoinDetail from 'components/coin/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'coin',
        element: <CoinPage />,
        children: [
          { path: '', element: <CoinList /> },
          { path: ':coinId', element: <CoinDetail /> },
        ],
      },
    ],
  },
]);

export default router;
