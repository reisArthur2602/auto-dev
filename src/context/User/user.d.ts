import { User, UserData } from '../../dtos/user';

export type UserContextData = {
  user: UserData | null;
  loading: boolean;
  isAuth: boolean;
  onRegister: (data: User) => void;
  onLogin: (data: Omit<User, 'name'>) => void;
};
