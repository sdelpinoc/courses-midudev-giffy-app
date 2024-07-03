/** @jsxImportSource @emotion/react */

import { Helmet } from 'react-helmet';

import SearchForm from '../../components/searchForm/SearchForm';

import { css } from '@emotion/react';
import Button from '../../components/Button/';

// css`` -> tag template
const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fontSize = '5rem';

// Objects
const codeErrorStyles = css({
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: fontSize,
  ":hover": {
    transform: 'scale(1.5)'
  }
});

const msgErrorStyles = css({
  fontSize: '1.5rem',
  margin: '1rem 0'
});


export default function NotFound () {
  return (
    <>
      <Helmet>
        <title>Error 404 | Not found</title>
      </Helmet>
      <SearchForm />
      <div css={pageErrorStyles}>
        <span css={codeErrorStyles}>404</span>
        <span css={msgErrorStyles}>Page not found</span>
        <Button href='/'>Go to Home</Button>
      </div>
    </>
  )
}