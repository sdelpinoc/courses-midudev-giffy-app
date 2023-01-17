import { API_KEY, API_URL } from './settings';

const fromApiResponseToArray = apiResponse => {
    const { data = [] } = apiResponse;

    return data;
}

export const getTrendingTerms = async () => {
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(apiUrl)
        .then(result => result.json())
        .then(fromApiResponseToArray);
}