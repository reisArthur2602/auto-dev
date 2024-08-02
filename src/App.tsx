import { Outlet } from 'react-router-dom';
import { Header } from './components';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
