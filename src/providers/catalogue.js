import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const catalogueFunction = () => {
    api
      .get()
      .then((res) => setCatalogue(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    catalogueFunction();
  }, []);

  const addToEvent = (event, setEvent, drink) => {
    if (!event.some((item) => item.name === drink.name)) {
      setEvent([...event, drink]);
    }
  };
  const removeFromEvent = (event, setEvent, drink) => {
    const newList = event.filter((selected) => selected.id !== drink.id);
    return setEvent(newList);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToEvent, removeFromEvent }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
