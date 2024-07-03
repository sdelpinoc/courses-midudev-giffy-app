import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Header () {
  const { isLogged, logout } = useUser();

  const location = useLocation();

  const handleClick = (evt) => {
    evt.preventDefault();
    logout();
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged
      ? <Link onClick={handleClick}>
        Logout
      </Link>
      : <>
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </>
  }

  const content = (['/login', '/register'].includes(location.pathname))
    ? null
    : renderLoginButtons({ isLogged })

  return (
    <header className="gf-header">
      {content}
    </header>
  )
}