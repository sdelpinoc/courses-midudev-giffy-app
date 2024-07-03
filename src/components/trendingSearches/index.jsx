
import { lazy, Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

// import(): Dynamic import, is asynchronous and returns a promise
const TrendingSearches = lazy(
  () => import('./TrendingSearches')
);

const LazyTrend = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '50px' });

  return <div ref={fromRef}>
    <Suspense fallback={'I am loading...'}>
      {isNearScreen ? <TrendingSearches /> : 'Loading...'}
    </Suspense>
  </div>
};

export default LazyTrend;