import { ENDPOINT } from './settings';

export const loginService = ({ email, password }) => {
    return fetch(`${ENDPOINT}/api/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok');
        return res.json(); // Get the readable stream and this also return a promise, so we need another then
    }).then(res => {
        const { token } = res;

        return token;
    })
}