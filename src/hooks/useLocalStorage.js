import { useState } from "react";
import { useEffect } from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

    } catch(error) {
      console.log("Error localStorage", error);
      setError(true);
    }

  }, [itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    error,
  }

}

export { useLocalStorage };