import { Helmet } from 'react-helmet';

import ListOfGifs from '../../components/ListOfGifs';
import SearchForm from '../../components/searchForm/SearchForm';
import TrendingSearches from '../../components/trendingSearches';

import { useGifs } from '../../hooks/useGifs';

function Home () {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <div className="app-main">
        <div className="app-results">
          <h3>Last search</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="app-categories">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}

export default Home;