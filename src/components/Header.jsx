import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function Header() {
    const { isLogged, logout } = useUser();

    const handleClick = (evt) => {
        evt.preventDefault();
        logout();
    }

    return (
        <header className="gf-header">
            {
                isLogged
                    ? <Link onClick={handleClick}>
                        Logout
                    </Link>
                    : <Link to="/login">
                        Login
                    </Link>
            }
        </header>
    )
}