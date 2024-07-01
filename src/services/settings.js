
// console.log('import.meta.env.MODE: ', import.meta.env.MODE)
export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_URL = import.meta.env.VITE_API_URL;

let ENDPOINT = import.meta.env.ENDPOINT;

if (import.meta.env.MODE === 'development') {
  ENDPOINT = import.meta.env.VITE_ENDPOINT
}

export { ENDPOINT }