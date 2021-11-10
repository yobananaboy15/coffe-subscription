import React, { useState, createContext, useContext } from 'react';

type MenuProviderProps = {
  children: any
};

const MenuContext = createContext({});

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuProvider = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('This hook needs to be used inside the MenuContext provider');
  }
  return context;
};
