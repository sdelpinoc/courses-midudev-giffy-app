import { useGifs } from './useGifs';
import { useState, useEffect } from 'react';
import { getSingleGif } from '../services/getSingleGif';

export default function useSingleGif({ id }) {
    const { gifs } = useGifs();

    const gifsFromCache = gifs.find(sigleGif => sigleGif.id === id);

    const [gif, setGif] = useState(gifsFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!gif) {
            setIsLoading(true);
            // Call the service if there is not gif from 'cache'
            getSingleGif({id})
                .then(gif => {
                    setGif(gif);
                    setIsLoading(false);
                })
                .catch(error => {
                    setIsLoading(false);
                    setIsError(error);
                })
        }
    }, [gif, id]);

    return { gif, isLoading, isError };
}