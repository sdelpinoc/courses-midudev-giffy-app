import { useRef, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from '../../hooks/useNearScreen';

import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
// import useSeo from '../../hooks/useSeo';

const SearchResults = () => {
    const { keyword } = useParams();

    const { loading, gifs, setPage } = useGifs({ keyword });

    const externalRef = useRef();

    const { isNearScreen } = useNearScreen({
        distance: '100px',
        externalRef: loading ? null : externalRef,
        once: false
    });

    const title = gifs ? `${gifs.length} result of ${keyword}` : '';
    // useSeo({ title });
    // console.log('SearchResults - loading: ', { loading });
    // console.log('SearchResults - externalRef: ', { externalRef });
    // console.log('SearchResults - isNearScreen: ', { isNearScreen });

    // const handleNextPage = () => {
    //     // console.log('handleNextPage');
    //     setPage(prevPag => prevPag + 1);
    // }

    // const handleNextPage = () => {
    //     console.log('handleNextPage');
    // }

    // originally it was useCallback but it throws the following error: React Hook useCallback received a function whose dependencies are unknown. Pass an inline function instead react-hooks/exhaustive-deps
    const debounceHandleNextPage = useMemo(() => debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]);

    useEffect(() => {
        // console.log('SearchResults - useEffect - isNearScreen: ', { isNearScreen });
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
                        <ListOfGifs gifs={gifs} keyword={keyword} />
                        <div id="visor" ref={externalRef}></div>
                    </>
            }
            {/* <br />
            <button onClick={handleNextPage}>Next page</button> */}
        </>
    )
}

export default SearchResults;
