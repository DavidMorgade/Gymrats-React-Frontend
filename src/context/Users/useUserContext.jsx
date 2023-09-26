import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [user, setUser] = useState('en');
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UserContext);
}
