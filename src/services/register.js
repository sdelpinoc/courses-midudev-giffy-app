import { ENDPOINT } from './settings';

export const registerService = async ({ email, password }) => {
  return fetch(`${ENDPOINT}/api/users`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  }).then(async res => {
    if (!res.ok) {
      const result = await res.json();
      const { msg } = result.errors[0];

      throw new Error(msg || 'Could not register account');
    }

    return res.json(); // Get the readable stream and this also return a promise, so we need another then
  }).then(() => {
    return true;
  });
}