let API_KEY = import.meta.env.API_KEY;

let API_URL = import.meta.env.API_URL;

let ENDPOINT = import.meta.env.ENDPOINT;

if (import.meta.env.MODE === 'development') {
  API_URL = import.meta.env.VITE_API_URL
  API_KEY = import.meta.env.VITE_API_KEY
  ENDPOINT = import.meta.env.VITE_ENDPOINT
}

export {
  API_URL,
  API_KEY,
  ENDPOINT
}