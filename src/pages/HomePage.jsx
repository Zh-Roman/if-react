import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TopSection from '../modules/topSection/TopSection';
import HomesGuestsLovesSection from '../modules/homesGuestsLovesSection/HomesGuestsLovesSection';
import WhatDoWeOffer from '../modules/whatDoWeOffer/WhatDoWeOffer';
import TheBestDestinations from '../modules/theBestDestinations/TheBestDestinations';
import GuestsReviews from '../modules/guestsReviews/GuestsReviews';
import AppAdvertising from '../components/appAdvertising/AppAdvertising';
import AvailableHotels from '../modules/availableHotels/AvailableHotels';
import { queryDataSelector, queryErrorSelector, queryLoadingSelector } from '../ducks/userQuery/selectors';
import Loading from '../components/loadingProcess/Loading';
import { getUserQueryFailed } from '../ducks/userQuery/actions';

function HomePage() {
  const [loaderRef, setLoaderRef] = useState(null);
  const [topScreenRef, setTopScreenRef] = useState(null);
  const navigateToErrorPage = useNavigate();
  const dispatch = useDispatch();
  const executeScrollToData = (ref) => ref.current?.scrollIntoView();
  const loading = useSelector(queryLoadingSelector);
  const dataFromSearchRequest = useSelector(queryDataSelector);
  const queryError = useSelector(queryErrorSelector);
  if (loading) {
    executeScrollToData(loaderRef);
  }
  useEffect(() => {
    if (topScreenRef) {
      executeScrollToData(topScreenRef);
    }
    if (queryError !== null) {
      navigateToErrorPage('/error');
      dispatch(getUserQueryFailed(null));
    }
  }, [queryError]);

  return (
    <div>
      <TopSection queryError={queryError} setRef={setTopScreenRef} />
      <Loading loading={loading} setRef={setLoaderRef} />
      {dataFromSearchRequest
        && (
          <AvailableHotels
            dataFromSearchRequest={dataFromSearchRequest}
          />
        )}
      <WhatDoWeOffer />
      <HomesGuestsLovesSection />
      <TheBestDestinations />
      <AppAdvertising />
      <GuestsReviews />
    </div>
  );
}

export default HomePage;
