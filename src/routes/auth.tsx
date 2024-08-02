import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, New } from '../pages';

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
