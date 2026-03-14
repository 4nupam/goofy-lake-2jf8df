import { useState, useEffect } from "react";

export default function useFetch({ api }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!api) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(api);

        if (!res.ok) {
          throw new Error("Response not ok");
        }

        const ans = await res.json();
        setData(ans);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api]);

  return { data, loading, error };
}
