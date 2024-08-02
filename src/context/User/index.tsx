import { createContext, ReactNode, useContext, useState } from 'react';
import { UserContextData } from './user';
import { UserData } from '../../dtos/user';

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <UserContext.Provider value={{ user, loading, isAuth: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
