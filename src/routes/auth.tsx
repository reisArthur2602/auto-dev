import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
