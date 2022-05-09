import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HotelProfile from '../modules/hotelProfile/HotelProfile';

const basicUrlForRequest = 'https://fe-student-api.herokuapp.com/api/hotels';
function AvailableHotelsPage() {
  const { hotelId } = useParams();
  const { data } = useFetch(`${basicUrlForRequest}/${hotelId}`);
  return (
    <div>
      {data.length !== 0 && (
        <HotelProfile data={data} />
      )}
    </div>
  );
}

export default AvailableHotelsPage;
