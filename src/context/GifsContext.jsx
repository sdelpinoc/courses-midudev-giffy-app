import { createContext, useState } from 'react';

const Context = createContext({});

// In this case we provide the value to the context
// By using the GifsContext, we can access the value of gifs and the function of setGifs, from any component that is inside this context
// Or from any custom hook, using the useContext hook
export const GifsContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{ gifs, setGifs }}>
      {children}
    </Context.Provider>
  )
};

export default Context;