import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/registration';
import Home from './pages/Home';
import Login from './pages/login';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import LandingPage from './pages/Landing';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Register />} />
          <Route path="login" element={isLoggedIn ? <Navigate to="/landing" /> : <Login onLogin={handleLogin} />} />
          <Route path="landing" element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
