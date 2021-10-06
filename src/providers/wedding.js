import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [WeddingDrinks, setWeddingDrinks] = useState([]);
  return (
    <WeddingContext.Provider value={{ WeddingDrinks, setWeddingDrinks }}>
      {children}
    </WeddingContext.Provider>
  );
};
