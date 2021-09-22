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
  const [address, setAddress] = useState([]);
  const [soups, setSoups] = useState([]);
  const logIn = (userName) => {
    setUser(userName);
  };
  const logOut = () => {
    setUser(null);
  };
  const addAddress = (data) => {
    setAddress([data]);
  };
  const addSoup = (data) => {
    setSoups([...soups, data]);
  };
  return <dataContext.Provider value={{ user, logIn, logOut, addAddress, addSoup, soups, address }}>{children}</dataContext.Provider>;
};

export default DataProvider;
