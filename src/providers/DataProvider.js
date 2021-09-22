import React, { useState } from 'react';

export const dataContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  addOrder: () => {},
  addSoup: () => {},
  addAdress: () => {},
});

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [order, setOrder] = useState([]);
  const [soups, setSoups] = useState([]);
  const logIn = (userName) => {
    setUser(userName);
  };
  const logOut = () => {
    setUser(null);
  };
  const addOrder = (data) => {
    setOrder([data]);
  };
  const addSoup = (data) => {
    setSoups([...soups, data]);
    console.log('!!!!', soups);
  };
  return <dataContext.Provider value={{ user, logIn, logOut, addOrder, addSoup, order }}>{children}</dataContext.Provider>;
};

export default DataProvider;
