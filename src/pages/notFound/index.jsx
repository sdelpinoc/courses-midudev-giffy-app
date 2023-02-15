import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import SearchForm from '../../components/searchForm/SearchForm';

// import { css } from '@emotion/react';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Error 404 | Not found</title>
            </Helmet>
            <SearchForm />
            <div className='page-error'>
                <span className='code-error'>404</span>
                <span className='msg-error'>Page not found</span>
                <Link to={"/"} className='btn'>Go to Home</Link>
            </div>
        </>
    )
}