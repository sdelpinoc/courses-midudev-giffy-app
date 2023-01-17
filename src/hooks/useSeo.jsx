import { useEffect, useRef } from 'react';

export default function useTitle({ description, title }) {
    const prevTitle = useRef(document.title);
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

    useEffect(() => {
        const previuosTitle = prevTitle.current;
        if (title) {
            document.title = `${title} | Giffy`;
        }

        return () => document.title = previuosTitle;
    }, [title]);

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        const previuosDescription = prevDescription.current;
        // console.log({ previuosDescription });
        // console.log(previuosDescription.getAttribute('content'));

        if (description) {
            metaDescription.setAttribute('content', description);
        }

        return () => metaDescription.setAttribute('content', previuosDescription);
    }, [description]);
}