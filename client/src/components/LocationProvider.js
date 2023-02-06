import React, { createContext } from "react";
import useLocation from "@/hooks/use-location";

export const locationContext = createContext({});

function LocationProvider({ children }) {
  const { currentPosition } = useLocation();

  const value = {
    currentPosition,
  };
  return (
    <locationContext.Provider value={value}>
      {children}
    </locationContext.Provider>
  );
}

export default LocationProvider;
