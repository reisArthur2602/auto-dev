import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { UserContextData } from './user';
import { User, UserData } from '../../dtos/user';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../services';
import { toast } from 'react-toastify';

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const onRegister = async (data: User) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: data.name });
        setUser({ uid: user.uid, email: data.email, name: data.name });
        toast.success('Cadastro realizado com sucesso! Seja Bem-vindo');
      })
      .catch(() =>
        toast.error('O email informado já está associado a uma conta')
      )
      .finally(() => setLoading(false));
  };

  const onLogin = async (data: Omit<User, 'name'>) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({ user }) => {
        setUser({
          uid: user.uid,
          email: data.email,
          name: user.displayName as string,
        });
        toast.success('Bem-vindo de volta! Login realizado com sucesso.');
      })
      .catch(() => toast.error('Email/Senha incorreto'))

      .finally(() => setLoading(false));
  };

  const Logout = async () => {
    await signOut(auth).then(() => setUser(null));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response)
        setUser({
          uid: response.uid,
          email: response.email as string,
          name: response.displayName as string,
        });

      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ user, loading, isAuth: !!user, onRegister, onLogin, Logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
