import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Home, New } from '../pages';

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
