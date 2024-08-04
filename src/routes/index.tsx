import { Loading } from '../components';
import { useUser } from '../context/User';
import AppRoutes from './app';
import AuthRoutes from './auth';

export default () => {
  const { loading, isAuth } = useUser();

  if (loading) return <Loading />;

  return !loading && isAuth ? <AuthRoutes /> : <AppRoutes />;
};
