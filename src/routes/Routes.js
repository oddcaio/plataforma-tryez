import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Mentoria from '../pages/mentoria/Mentoria';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentoria" element={<Mentoria />} />
    </Routes>
  );
}
