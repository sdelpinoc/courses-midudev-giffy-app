import { Link } from 'react-router-dom';

const Categories = ({ name, categories }) => {
    return (
        <>
            <h3>{name}</h3>
            <div className="list-of-categories">
                {
                    categories.map(category => (
                        <span key={category}><Link to={`/search/${category}`}>{category}</Link></span>
                    ))
                }
            </div>
        </>
    )
}

export default Categories;