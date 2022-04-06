import React, { useRef } from 'react';
import './AvailableHotels.css';
import SectionTitle from '../../components/sectionContainer/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionContainer/sectionBody/SliderWithFourItems';
import Loading from '../../components/loading/Loading';
import useFetch from '../../components/hooks/useFetch';

const basicUrlForSearch = 'https://fe-student-api.herokuapp.com/api/hotels?';

function AvailableHotels(props) {
  const availableHotelsRef = useRef(null);
  const { valueFromInput } = props;
  let urlForRequest = '';
  if (valueFromInput !== '') {
    urlForRequest = `${basicUrlForSearch}search=${valueFromInput}`;
  }
  const { data, loading } = useFetch(urlForRequest, availableHotelsRef);
  return (
    <div ref={availableHotelsRef}>
      <Loading
        loading={loading}
      />
      {valueFromInput !== '' && data.length !== 0 && (
      <div className="available_hotels">
        <SectionTitle>Available hotels</SectionTitle>
        <SliderWithFourItems data={data} />
      </div>
      )}
    </div>

  );
}

export { useFetch, AvailableHotels };
