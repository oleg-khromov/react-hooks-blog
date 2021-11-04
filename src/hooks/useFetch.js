import { useState, useEffect, useCallback } from "react";
import { useLocalStorage } from "../hooks";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = useCallback((method = "get", data = {}) => {
    setOptions({
      method,
      data,
    });
    setIsLoading((isLoading) => !isLoading);
  }, []);

  useEffect(() => {
    const headers = {
      autorization: token ? `Token ${token}` : "",
    };

    if (!isLoading) {
      return;
    }

    async function fetch() {
      try {
        const response = await axios(API_URL + url, { ...options, headers });
        setData(response.data);
      } catch (error) {
        setError(error.response.data);
      } finally {
        setIsLoading((isLoading) => !isLoading);
      }
    }

    fetch();
  }, [isLoading, url, options, token]);

  return [
    {
      data,
      isLoading,
      error,
    },
    doFetch,
  ];
};

export default useFetch;
