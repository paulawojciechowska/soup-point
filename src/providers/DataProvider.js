import React, { useState } from 'react';

export const dataContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  addOrder: () => {},
});

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [order, setOrder] = useState([]);
  const logIn = (userName) => {
    setUser(userName);
  };
  const logOut = () => {
    setUser(null);
  };
  const addOrder = (data) => {
    setOrder([data]);
  };
  return <dataContext.Provider value={{ user, logIn, logOut, addOrder, order }}>{children}</dataContext.Provider>;
};

export default DataProvider;
