import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import TrendingSearches from '../../components/trendingSearches';
import SearchForm from '../../components/SearchForm';
import { Helmet } from 'react-helmet';

function Home() {
    const { gifs } = useGifs();

    const pushLocation = useNavigate(); // Return a function to navigate to
    // console.log(location);

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`);
    }, [pushLocation]);

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            <div className="app-main">
                <div className="app-results">
                    <h3>Last search</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="app-categories">
                    {/* <Categories name={'Trending categories'} categories={POPULAR_GIFTS} /> */}
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}

export default Home;