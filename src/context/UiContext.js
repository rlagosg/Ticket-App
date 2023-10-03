import React, { createContext, useState, useContext } from 'react';

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [ocultarMenu, setOcultarMenu] = useState(true);

  const showMenu = () => {
    setOcultarMenu(false);
  };

  const hideMenu = () => {
    setOcultarMenu(true);
  };

  return (
    <UiContext.Provider value={{ ocultarMenu, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
