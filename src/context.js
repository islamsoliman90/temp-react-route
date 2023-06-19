import React from 'react';
const initialState = {
    search: true,
   
  }
const AppContext = React.createContext();
const AppProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const toggleHandler=(name)=>{
        setToggle();
    }
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return React.useContext(AppContext)
  }
  
  export { AppContext, AppProvider }