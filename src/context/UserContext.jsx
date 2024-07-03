import { createContext, useState, useEffect } from 'react';

import { getFavs } from '../services/getFavs';

const Context = createContext({});

// In this case we provide the value to the context
// By using the jwtContext, we can access the value of jwt and the function of setJwt, from any component that is inside this context
// Or from any custom hook, using the useContext hook
export const UserContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'));

  useEffect(() => {
    if (!jwt) return setFavs([]);
    getFavs({ jwt })
      .then(setFavs);
  }, [jwt]);

  return (
    <Context.Provider value={{ favs, jwt, setFavs, setJwt }}>
      {children}
    </Context.Provider>
  )
};

export default Context;