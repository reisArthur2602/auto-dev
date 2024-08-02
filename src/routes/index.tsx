import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages';

export default createBrowserRouter([
  { element: <App />, children: [{ path: '/', element: <Home /> }] },
]);
