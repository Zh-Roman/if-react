import { useEffect, useState } from 'react';

const useFetch = (urlForRequest) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(urlForRequest);
        const items = await res.json();
        setData(items);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    getData();
  }, [urlForRequest]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
