import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(data);
    setIsPending(false);
  }, []);

  const getData = async () => {
    const { data } = await axios.get(url);
    setData(data);
  }
  return { data, isPending, error };
}
 
export default useFetch;