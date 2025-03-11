import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home/home';
import GoOpl from './Pages/go-opl/GoOpl';  // імпортуємо інші сторінки
import Masterclass from './Pages/masterClass/masterclass';
// import Language from './Pages/language/Language';
import Municipality from './Pages/municipality/Municipality';
import Profile from './Pages/profile/Profile';
import Login from './Pages/login/Login';
import Register from './Pages/login/Register';
import { AuthProvider } from './context/AuthContext';  // Імпортуємо AuthProvider
import './App.css';

const App = () => {
  return (
    <AuthProvider> {/* Обгортаємо всі маршрути в AuthProvider */}
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/go-opl" element={<GoOpl />} />
          <Route path="/masterclass" element={<Masterclass />} />
          {/* <Route path="/language" element={<Language />} /> */}
          <Route path="/municipality" element={<Municipality />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
