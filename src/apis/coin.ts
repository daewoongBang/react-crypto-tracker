const BASE_URL = 'https://api.coinpaprika.com/v1';

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
