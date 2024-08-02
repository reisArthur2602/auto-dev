import { UserData } from '../../dtos/user';

export type UserContextData = {
  user: UserData | null;
  loading: boolean;
  isAuth: boolean;
};
