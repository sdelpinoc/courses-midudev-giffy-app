import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pushLocation = useNavigate();

    const { login, isLogged, isLoginLoading, hasLoginError } = useUser();

    useEffect(() => {
        if (isLogged) pushLocation('/');
    }, [isLogged, pushLocation]);

    const handleSubmit = evt => {
        evt.preventDefault();
        // alert(`${email} - ${password}`);
        login({ email, password });
    }

    return (
        <>
            <h3>Login</h3>
            {
                isLoginLoading && <strong>Cheking credentials...</strong>
            }
            {
                !isLoginLoading &&
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={evt => { setEmail(evt.target.value) }} placeholder="email@email.com" />
                    <input type="password" value={password} onChange={evt => { setPassword(evt.target.value) }} placeholder="password" />
                    <button disabled={isLoginLoading}>Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}