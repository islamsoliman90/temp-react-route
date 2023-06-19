import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
const initialState = {
  id: 1,
  search: true,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleHandler = () => {
    dispatch({ type: "search" });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleHandler }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
