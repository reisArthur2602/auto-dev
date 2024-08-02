import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { UserProvider } from './context/User';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="w-full min-h-screen flex flex-col">
          <Header />
          <Routes />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
