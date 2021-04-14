import React, {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          const finalRes= json['results']
          setResponse(finalRes);
        } catch (error) {
          console.warn(error);
        }
      };
      fetchData();
    }, []);
    return response;
  };

  export default useFetch;