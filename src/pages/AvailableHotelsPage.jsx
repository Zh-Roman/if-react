import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/loadingProcess/Loading';
import HotelProfile from '../modules/hotelProfile/HotelProfile';

const basicUrlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels';
function AvailableHotelsPage() {
  const scrollForLoading = useRef(null);
  const { hotelId } = useParams();
  const { data, loading } = useFetch(`${basicUrlForRequest}/${hotelId}`);
  return (
    <div ref={scrollForLoading}>
      <Loading
        loading={loading}
      />
      {data.length !== 0 && (
        <HotelProfile data={data} />
      )}
    </div>
  );
}

export default AvailableHotelsPage;
