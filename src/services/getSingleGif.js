import { API_KEY, API_URL } from './settings';

const fromApiResponseToGif = apiResponse => {
  const { data } = apiResponse;

  const { id, title, images } = data;
  const { url } = images.downsized_medium;

  return {
    id,
    title,
    url
  };
}

export const getSingleGif = async ({ id }) => {
  const apiUrl = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(apiUrl)
    .then(result => result.json())
    .then(fromApiResponseToGif);
}