import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoaging, setIsLoaging] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw Error("Couls not fetch the data from the server.");
        }
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsLoaging(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoaging(false);
      });
  }, [url]);

  return { data, isLoaging, error };
};

export default useFetch;
