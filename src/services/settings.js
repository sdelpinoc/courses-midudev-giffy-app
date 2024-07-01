let API_KEY = import.meta.env.VITE_API_KEY;

let API_URL = import.meta.env.VITE_API_URL;

let ENDPOINT = import.meta.env.VITE_ENDPOINT;

if (import.meta.env.MODE === 'development') {
  API_KEY = import.meta.env.VITE_API_KEY_DEV
  API_URL = import.meta.env.VITE_API_URL_DEV
  ENDPOINT = import.meta.env.VITE_ENDPOINT_DEV
}

export {
  API_KEY,
  API_URL,
  ENDPOINT
}