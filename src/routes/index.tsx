import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Login, Register } from '../pages';

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);
