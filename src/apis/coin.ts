const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};
