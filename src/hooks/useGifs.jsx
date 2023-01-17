
import { useState, useEffect, useContext } from 'react';

import { getGifs } from '../services/getGifs';

import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
    const [loading, setLoading] = useState(false);
    // const [gifs, setGifs] = useState([]); // local state
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const { gifs, setGifs } = useContext(GifsContext); // context state

    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'random';

    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs);
                setLoading(false);

                localStorage.setItem('lastKeyword', keywordToUse);
            });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {
        if (page === INITIAL_PAGE) return;
        setLoadingNextPage(true);

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            })
    }, [keywordToUse, page, setPage, setGifs]);

    return {
        loading,
        loadingNextPage,
        gifs,
        setPage
    };
}