import { useRef, useEffect, useState } from 'react';

export const useNearScreen = ({ distance = '50px', externalRef, once = true }) => {
    const [isNearScreen, setIsNearScreen] = useState(false);

    const fromRef = useRef();

    useEffect(() => {
        let observer;

        const element = externalRef ? externalRef.current : fromRef.current;
        // console.log({ element });
        // entries<Array>, all the objects/elements to observe
        const onChange = (entries, observer) => {
            // console.log({ entries });
            const el = entries[0];
            // console.log({ el });
            console.log('el.isIntersecting: ', el.isIntersecting);
            // console.log(typeof el);
            if (el.isIntersecting) {
                setIsNearScreen(true);
                // We only need to render TrendingSearches once, in the first intersection, after that we disconnect the observer
                // observer.disconnect();
                // To stop observe function of one element
                once && observer.unobserve(el.target);
            } else {
                !once && setIsNearScreen(false);
            }
        };

        // Install a pollify
        // yarn add intersection-observer
        // Need to restart the server for the dynamically import
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            // rootMargin is the distant to to check if the element is being intercepted(seen) in the viewport
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            });

            // console.log('then - element: ', element);
            if (element) {
                // console.log('observer.observe(element): ', element);
                observer.observe(element);
            }
        });
        // Fix to delay the observer because when loading the page the trending section is shown on top for a few seconds, since all the gifs don't load immediately
        // setTimeout(() => {
        // console.log('set observer');
        // elementRef.current, store the actual value of the element
        //     observer.observe(elementRef.current);
        // }, 1000);

        // Clean the observer
        return () => {
            observer && observer.disconnect();
        }
    }, [distance, externalRef, once]);

    return { isNearScreen, fromRef };
}