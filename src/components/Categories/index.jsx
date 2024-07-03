import { Link } from 'react-router-dom';

import { CategoryLinks } from './styles';

const Categories = ({ name, categories }) => {
  return (
    <>
      <h3>{name}</h3>
      <div className="list-of-categories">
        {
          categories.map((category, index) => (
            <CategoryLinks key={category} index={index}>
              <Link to={`/search/${category}`}>{category}</Link>
            </CategoryLinks>
          ))
        }
      </div>
    </>
  )
}

export default Categories;