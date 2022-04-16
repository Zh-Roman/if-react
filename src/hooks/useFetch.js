import { useEffect, useState } from 'react';

const useFetch = (urlForRequest, refForScroll) => {
  const executeScrollToData = () => refForScroll.current.scrollIntoView();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (urlForRequest !== '') {
      const getData = async () => {
        try {
          setLoading(true);
          const res = await fetch(urlForRequest);
          const items = await res.json();
          setData(items);
          setLoading(false);
          executeScrollToData();
        } catch (e) {
          setError(e.message);
          setLoading(false);
        }
      };
      if (refForScroll !== undefined) { /* <-------     I just want you to see the loadingProcess process */
        setLoading(true);
        executeScrollToData();
        setTimeout(getData, 3000); /* <-------    And I know, that it's absolutely wrong  */
      } else {
        getData();
      }
    }
  }, [urlForRequest]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
