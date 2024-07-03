import { ENDPOINT } from './settings';

export const getFavs = async ({ jwt }) => {
  return fetch(`${ENDPOINT}/api/favs`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "jwt-token": jwt
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is not ok');
    return res.json(); // Get the readable stream and this also return a promise, so we need another then
  }).then(res => {
    const { favs } = res;

    return favs;
  });
}