
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Register } from '../pages';

export default () => {
    return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
}