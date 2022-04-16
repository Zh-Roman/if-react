import React, { useRef } from 'react';
import './AvailableHotels.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionBodySlider/SliderWithFourItems';
import Loading from '../../components/loadingProcess/Loading';
import useFetch from '../../hooks/useFetch';

const basicUrlForSearch = 'https://fe-student-api.herokuapp.com/api/hotels';

function AvailableHotels(props) {
  const needNavigate = true;
  const availableHotelsRef = useRef(null);
  const { valueFromInput } = props;
  let urlForRequest = '';
  if (valueFromInput !== '') {
    urlForRequest = `${basicUrlForSearch}?search=${valueFromInput}`;
  }
  const { data: dataFromSearchRequest, loading } = useFetch(urlForRequest, availableHotelsRef);
  return (
    <div ref={availableHotelsRef}>
      <Loading
        loading={loading}
      />
      {valueFromInput !== '' && dataFromSearchRequest.length !== 0 && (
      <div className="available_hotels">
        <SectionTitle>Available hotels</SectionTitle>
        <SliderWithFourItems
          data={dataFromSearchRequest}
          needNavigate={needNavigate}
        />
      </div>
      )}
    </div>

  );
}

export { useFetch, AvailableHotels };
