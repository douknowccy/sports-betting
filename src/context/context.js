import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "../context/reducer";
import data from "./data-local";
import { SET_INPUT, SET_DEFAULT } from "./action";
import football from "./football-local";
const AppContext = React.createContext();

const initialState = {
  isLoading: true,
  isUser: false,
  data,
  football: football,
};
export const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_DEFAULT });
    if (input) {
      dispatch({ type: SET_INPUT, payload: input });
    }
  }, [input]);
  return (
    <AppContext.Provider value={{ ...state, input, setInput, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
