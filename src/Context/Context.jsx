import { useContext, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showContext, setShowContext] = useState("CONTEXT CONNECTED");
  return (
    <GlobalContext.Provider
      value={{
        showContext,
        setShowContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
