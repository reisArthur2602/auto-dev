import { createContext, ReactNode, useContext, useState } from 'react';
import { UserContextData } from './user';
import { User, UserData } from '../../dtos/user';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../services';

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onRegister = async (data: User) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: data.name });
        setUser({ uid: user.uid, email: data.email, name: data.name });
      })
      .catch(() =>
        console.log('O email informado já está associado a uma conta')
      )
      .finally(() => setLoading(false));
  };

  return (
    <UserContext.Provider value={{ user, loading, isAuth: !!user, onRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
