import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/useUser';
import Modal from './Modal';
import Login from './Login';

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();

    // const pushLocation = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const isFaved = favs.some(favId => favId === id);

    const handleClick = () => {
        if (!isLogged) return setShowModal(true);
        addFav({ id });
    }

    const handleClose = () => {
        setShowModal(false);
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
        <>
            <button className="gf-fav" onClick={handleClick}>
                <span aria-label={label} role="img">{emoji}</span>
            </button>
            {
                showModal && <Modal onClose={handleClose}><Login handleLogin={handleClose} /></Modal>
            }
        </>
    )
}