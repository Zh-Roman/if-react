import React, { useEffect, useState } from 'react';
import './AvailableHotels.css';
import SectionTitle from '../../components/sectionContainer/sectionTitle/SectionTitle';
import SliderWithFourItems from '../../components/sectionContainer/sectionBody/SliderWithFourItems';

const basicUrlForSearch = 'https://fe-student-api.herokuapp.com/api/hotels?';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const items = await res.json();
        setData(items);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

function AvailableHotels(props) {
  const { valueFromInput } = props;
  const urlForRequest = `${basicUrlForSearch}search=${valueFromInput}`;
  const { data } = useFetch(urlForRequest);
  return (
    <div>
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
