import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Home, New } from '../pages';
import { Details } from '../pages/Details';

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
