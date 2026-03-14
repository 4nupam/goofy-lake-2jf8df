import { useEffect, useState } from "react";
export default function useDebounce(value, delay) {
  const [Data, setData] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return data;
}
