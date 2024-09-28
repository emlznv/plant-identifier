import React, { createContext, useContext } from 'react';
import { useHistory } from '../hooks/useHistory';

const StorageContext = createContext(null);

export const StorageContextProvider = ({ children }) => {
    const historyState = useHistory();

    return (
      <StorageContext.Provider value={historyState}>
        {children}
      </StorageContext.Provider>
    );
  };
  

export const useStorage = () => useContext(StorageContext);
