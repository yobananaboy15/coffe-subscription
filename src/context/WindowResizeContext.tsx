import React, { createContext, useContext } from 'react';
import useViewport from '../hooks/useViewport';

type WindowResizeProviderProps = {
  children: any;
};

const windowResizeContext = createContext({});

export const WindowResizeProvider = ({ children }: WindowResizeProviderProps) => {
  const { width } = useViewport();
  return (
    <windowResizeContext.Provider value={{ width }}>
      {children}
    </windowResizeContext.Provider>
  );
};

export const useWindowResizeProvider = () => {
  const context = useContext(windowResizeContext);
  if (!context) {
    throw new Error('This hook needs to be used inside the MenuContext provider');
  }
  return context;
};
