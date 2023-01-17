import { memo } from 'react';
import { Link } from 'react-router-dom';

function Gifs({ id, title, url }) {
    return (
        <div className="gif">
            <Link to={`/gif/${id}`}>
                {/* <h4>{title}</h4> */}
                <img loading="lazy" src={url} alt={title} />
            </Link>
        </div>
    )
}
// If return true, the component is memorized
export default memo(Gifs, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
});