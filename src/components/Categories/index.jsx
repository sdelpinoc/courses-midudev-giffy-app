import { Link } from 'react-router-dom';

import { CategoryLinks } from './styles';

const Categories = ({ name, categories }) => {
  return (
    <>
      <p className="subtitle">{name}</p>
      <div>
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