import React from "react";
import { AppContext } from "./AppContext";
const AppProvider = ({ children }) => {
  const name = "grociera";
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

export default AppProvider;
