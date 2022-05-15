import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HotelProfile from '../modules/hotelProfile/HotelProfile';
import Loading from '../components/loadingProcess/Loading';

const basicUrlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels';

function AvailableHotelsPage() {
  const needScroll = false;
  const { hotelId } = useParams();
  const { data, loading } = useFetch(`${basicUrlForRequest}/${hotelId}`);
  return (
    <div>
      <Loading loading={loading} needScroll={needScroll} />
      {data.length !== 0 && (
        <HotelProfile data={data} />
      )}
    </div>
  );
}

export default AvailableHotelsPage;
