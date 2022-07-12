import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

const useAxios = (url) => {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await instance.get(url);
        setResponse(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  const refetch = async () => {
    try {
      setLoading(true);
      const res = await instance.get(url);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, refetch };
};
export default useAxios;
