import { useRef, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

import ListOfGifs from '../../components/ListOfGifs';
import SearchForm from '../../components/searchForm/SearchForm';

import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from '../../hooks/useNearScreen';

const SearchResults = () => {
  const { keyword = 'null', rating = 'g', lang = 'en' } = useParams();

  const { loading, gifs, setPage } = useGifs({ keyword, rating, lang });

  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    distance: '100px',
    externalRef: loading ? null : externalRef,
    once: false
  });

  const title = gifs ? `${gifs.length} result of ${keyword}` : '';

  // originally it was useCallback but it throws the following error: React Hook useCallback received a function whose dependencies are unknown. Pass an inline function instead react-hooks/exhaustive-deps
  const debounceHandleNextPage = useMemo(() => debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage]);

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      {
        loading
          ? <h1>Loading...</h1>
          : <>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={title}></meta>
            </Helmet>
            <SearchForm initialKeyword={keyword} initialRating={rating} initialLang={lang} />
            <ListOfGifs gifs={gifs} keyword={keyword} />
            <div id="visor" ref={externalRef}></div>
          </>
      }
    </>
  )
}

export default SearchResults;