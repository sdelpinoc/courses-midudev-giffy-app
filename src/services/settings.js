let API_KEY = import.meta.env.API_KEY_;

let API_URL = import.meta.env.API_URL_;

let ENDPOINT = import.meta.env.ENDPOINT_;

if (import.meta.env.MODE === 'development') {
  API_KEY = import.meta.env.VITE_API_KEY
  API_URL = import.meta.env.VITE_API_URL
  ENDPOINT = import.meta.env.VITE_ENDPOINT
}

export {
  API_KEY,
  API_URL,
  ENDPOINT
}