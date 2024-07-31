import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/useUser';

export default function Login ({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pushLocation = useNavigate();

  const { login, isLogged, isLoginLoading, hasLoginError } = useUser();
  console.log(login, isLogged, isLoginLoading, hasLoginError)

  useEffect(() => {
    if (isLogged) {
      pushLocation('/');
      handleLogin && handleLogin()
    }
  }, [isLogged, pushLocation, handleLogin]);

  const handleSubmit = evt => {
    evt.preventDefault();
    login({ email, password });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={evt => { setEmail(evt.target.value) }}
          placeholder="user@domain.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={evt => { setPassword(evt.target.value) }}
          placeholder="******"
        />
        <button type="submit"
          className="btn"
          disabled={isLoginLoading}>{!isLoginLoading ? 'Login' : 'Checking credentials...'}
        </button>
      </form>
      <div style={{ textAlign: 'center' }}>
        Do you need <Link to={'/register'}>register</Link>?
      </div>
      {
        hasLoginError && <p>Credentials are invalid! ❌</p>
      }
    </>
  )
}