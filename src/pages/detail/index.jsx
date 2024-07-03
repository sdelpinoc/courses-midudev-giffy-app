import { useParams, Navigate } from 'react-router-dom';

import Gifs from '../../components/Gifs';
import useSingleGif from '../../hooks/useSingleGif';

import { Helmet } from 'react-helmet';

const Detail = () => {
  const { id } = useParams();
  console.log({ id });

  const { gif, isLoading, isError } = useSingleGif({ id });
  console.log(gif);

  const title = gif ? gif.title : '';

  if (isLoading) return (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <p>Loading...</p>
    </>
  );

  if (isError) return <Navigate to={'/404'} />;

  return (
    gif
      ?
      <>
        <Helmet>
          <title>{title} || Giffy</title>
        </Helmet>
        <h3>{gif.title}</h3>
        <Gifs {...gif} />
      </>
      : <h3>Gif not found</h3>
  )
}

export default Detail;