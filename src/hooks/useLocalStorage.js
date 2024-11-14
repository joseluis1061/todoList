import { useState } from "react";


function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{  
    parsedItem = JSON.parse(localStorageItem);
  }

  const [items, setItems] = useState(parsedItem);

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItems(newTodos);
  }

  return [ 
    items,
    saveItem
  ]
}

export default useLocalStorage;