import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    tel: '',
  });

  return <GlobalContext.Provider value={{ userData, setUserData }}>{children}</GlobalContext.Provider>;
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }
  return context;
}
