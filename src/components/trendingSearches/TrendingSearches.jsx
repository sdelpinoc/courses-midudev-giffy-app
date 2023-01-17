import { useState, useEffect } from 'react';

import Categories from '../Categories';
import { getTrendingTerms } from '../../services/getTrendingTerms';

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms().then(setTrends);
    }, []);

    return <Categories name={'Trends'} categories={trends} />
}

export default TrendingSearches;