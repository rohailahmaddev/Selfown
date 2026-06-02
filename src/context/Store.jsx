import { createContext, useEffect, useState } from "react";
import { FaBullseye } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export const Data = createContext(null);

export const ContextProvider = ({ children }) => {
  const location = useLocation();

  const DEFAULT_COLOR = "#00bbd4";

  const [loading, setLoading] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [btnColor, setBtnColor] = useState(DEFAULT_COLOR);

  // RESET ON ROUTE CHANGE
  useEffect(() => {
    setBtnColor(DEFAULT_COLOR);
    setPaletteOpen(false)
  }, [location.pathname]);

  const contextData = {
    paletteOpen,
    setPaletteOpen,
    btnColor,
    setBtnColor,
    loading,
    setLoading,
  };

  return <Data.Provider value={contextData}>{children}</Data.Provider>;
};