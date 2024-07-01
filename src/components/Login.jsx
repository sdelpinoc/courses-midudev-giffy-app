import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Login ({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pushLocation = useNavigate();

    const { login, isLogged, isLoginLoading, hasLoginError } = useUser();

    useEffect(() => {
        if (isLogged) {
            pushLocation('/');
            handleLogin && handleLogin()
        }
    }, [isLogged, pushLocation, handleLogin]);

    const handleSubmit = evt => {
        evt.preventDefault();
        // alert(`${email} - ${password}`);
        login({ email, password });
    }

    return (
        <>
            {
                isLoginLoading && <p><strong>Checking credentials...</strong></p>
            }
            {
                !isLoginLoading &&
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={evt => { setEmail(evt.target.value) }} placeholder="email@email.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={evt => { setPassword(evt.target.value) }} placeholder="password" />
                    <button className="btn" disabled={isLoginLoading}>Login</button>
                </form>
            }
            {
                hasLoginError && <p><strong>Credentials are invalid</strong></p>
            }
        </>
    )
}