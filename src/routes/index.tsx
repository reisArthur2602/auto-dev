import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Login } from '../pages';

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);
