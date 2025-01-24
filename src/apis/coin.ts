const BASE_URL = 'https://api.coinpaprika.com/v1';

const CUSTOM_URL = 'https://ohlcv-api.nomadcoders.workers.dev';

export const getCoins = () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const getCoinDetail = (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((resposne) =>
    resposne.json()
  );
};

export const getCoinPrice = (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};

export const getCoinHistory = (coinId: string) => {
  return fetch(`${CUSTOM_URL}/?coinId=${coinId}`).then((response) =>
    response.json()
  );
};
