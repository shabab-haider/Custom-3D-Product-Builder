import React, { createContext, useState } from "react";

export const BuilderDataContext = createContext();

const BuilderContext = ({ children }) => {
  const [activeModel, setActiveModel] = useState("Hodies_shirt");

  return (
    <BuilderDataContext.Provider value={{ activeModel, setActiveModel }}>
      {children}
    </BuilderDataContext.Provider>
  );
};

export default BuilderContext;
