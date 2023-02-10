import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();

    const pushLocation = useNavigate();

    const isFaved = favs.some(favId => favId === id);

    const handleClick = () => {
        if (!isLogged) pushLocation('/login');
        addFav({ id });
    }

    const [
        label,
        emoji
    ] = isFaved
        ? [
            'Remove Gif from favorite',
            '❌'
        ] : [
            'Add Gif to favorite',
            '❤️'
        ];

    return (
        <button className="gf-fav" onClick={handleClick}>
            <span aria-label={label} role="img">{emoji}</span>
        </button>
    )
}