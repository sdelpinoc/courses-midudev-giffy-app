import { createContext } from 'react';

const Context = createContext({
    name: 'this-is-witout-provider',
    suscribeToChannel: false
});

export default Context;