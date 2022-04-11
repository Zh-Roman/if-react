import React, { useState } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import HomePage from './pages/HomePage';
import AvailableHotelsPage from './pages/AvailableHotelsPage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './components/requireAuth/RequireAuth';
import AuthContext from './context/AuthContext/AuthContext';

function App() {
  const [userAuthData, setUserAuthData] = useState({
    userData: null,
  });
  return (
    <AuthContext.Provider value={{ userAuthData, setUserAuthData }}>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/hotels/:hotelId" element={<AvailableHotelsPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
