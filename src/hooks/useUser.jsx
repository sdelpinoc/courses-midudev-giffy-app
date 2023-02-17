import { useCallback, useContext, useState } from 'react';

import Context from '../context/UserContext';

import { loginService } from '../services/login';
import { addFavService } from '../services/addFavService';
import { removeFavService } from '../services/removeFavService';

export const useUser = () => {
    const { favs, jwt, setJwt, setFavs } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });

    const login = useCallback(({ email, password }) => {
        setState({ loading: true, error: false });
        loginService({ email, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt);
                setState({ loading: false, error: false });
                setJwt(jwt);
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt');
                setState({ loading: false, error: true });
                console.log(err);
            });
    }, [setJwt]);

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        setJwt(null);
    }, [setJwt]);

    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(setFavs)
            .catch(err => console.log(err))
    }, [jwt, setFavs]);

    const removeFav = useCallback(({ id }) => {
        removeFavService({ id, jwt })
            .then(setFavs)
            .catch(err => console.log(err))
    }, [jwt, setFavs]);

    return {
        addFav,
        favs,
        hasLoginError: state.error,
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        login,
        logout,
        removeFav
    }
}