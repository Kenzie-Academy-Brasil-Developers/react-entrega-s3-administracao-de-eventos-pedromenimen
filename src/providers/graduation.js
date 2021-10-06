import { createContext, useState } from "react";

export const GraduationContext = createContext([])

export const GraduationProvider = ({ children }) => {
    const [GraduationDrinks, setGraduationDrinks] = useState([]);
    return (
      <GraduationContext.Provider
        value={{ GraduationDrinks, setGraduationDrinks }}
      >
        {children}
      </GraduationContext.Provider>
    );
  };