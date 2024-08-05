import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { UserProvider } from './context/User';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="w-full min-h-screen flex flex-col">
          <ToastContainer position="top-right" autoClose={4000} theme="dark" />
          <Header />
          <Routes />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
