import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;

  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { id, title, images } = image;
      const { url } = images.downsized_medium;

      return {
        id,
        title,
        url
      };
    });

    return gifs;
  }
}

export const getGifs = async ({ limit = 12, keyword = '', rating = 'g', page = 0, lang = 'es' }) => {
  const apiUrl = `
    ${API_URL}/gifs/search?api_key=${API_KEY}
    &q=${keyword}
    &limit=${limit}
    &offset=${page * limit}
    &rating=${rating}
    &lang=${lang}
  `;

  return fetch(apiUrl.replace(/\s+&/g, '&'))
    .then(result => result.json())
    .then(fromApiResponseToGifs);
}