const ENDPOINT = 'http://localhost:3000';

export const registerService = ({ email, password }) => {
    return fetch(`${ENDPOINT}/api/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    }).then(async res => {
        console.log(res);
        if (!res.ok) {
            const result = await res.json();
            // console.log(result);
            const { msg } = result.errors[0];
            throw new Error(msg || 'Response is not ok');
        }

        return res.json(); // Get the readable stream and this also return a promise, so we need another then
    }).then(res => {
        return true;
    });
}