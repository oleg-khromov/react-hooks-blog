import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = "") => {
  const [value, setValue] = useState(
    () => localStorage.getItem(key) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
