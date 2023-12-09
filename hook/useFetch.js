import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "@env";

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=id:${query.id}&days=${query.days}&aqi=no&alerts=no`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    isLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
