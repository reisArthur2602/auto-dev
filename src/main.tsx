import React from 'react';
import ReactDOM from 'react-dom/client';
import routes from './routes';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { UserProvider } from './context/User';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </React.StrictMode>
);
