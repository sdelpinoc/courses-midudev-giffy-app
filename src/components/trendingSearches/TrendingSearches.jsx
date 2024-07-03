import { useState, useEffect } from 'react';

import { getTrendingTerms } from '../../services/getTrendingTerms';

import Categories from '../Categories';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Categories name={'Trends'} categories={trends} />
}

export default TrendingSearches;