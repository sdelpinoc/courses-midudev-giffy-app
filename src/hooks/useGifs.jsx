
import { useState, useEffect, useContext } from 'react';

import { getGifs } from '../services/getGifs';

import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword, rating, lang } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const { gifs, setGifs } = useContext(GifsContext); // Context state

  const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating, lang })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);

        localStorage.setItem('lastKeyword', keywordToUse);
      });
  }, [keyword, keywordToUse, setGifs, rating, lang]);

  // For pagination/infinity scroll
  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, rating, page, lang })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
  }, [keywordToUse, page, setPage, setGifs, rating, lang]);

  return {
    loading,
    loadingNextPage,
    gifs,
    setPage
  };
}