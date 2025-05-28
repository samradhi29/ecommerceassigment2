import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Finalorderpage from './component/Finalorderpage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/final" element={<Finalorderpage/>} />
    </Routes>
  );
}
