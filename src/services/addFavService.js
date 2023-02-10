const ENDPOINT = 'http://localhost:3000';

export const addFavService = ({ id, jwt }) => {
    return fetch(`${ENDPOINT}/api/favs/${id}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "jwt-token": jwt
        },
        body: JSON.stringify({ jwt })
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok');
        return res.json(); // Get the readable stream and this also return a promise, so we need another then
    }).then(res => {
        const { favs } = res;

        return favs;
    });
}