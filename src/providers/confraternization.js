import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [ConfraternizationDrinks, setConfraternizationDrinks] = useState([]);
  return (
    <ConfraternizationContext.Provider
      value={{ ConfraternizationDrinks, setConfraternizationDrinks }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
