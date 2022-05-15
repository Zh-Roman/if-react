import React, { useContext } from 'react';
import './styles/fonts.css';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import HomePage from './pages/HomePage';
import AvailableHotelsPage from './pages/AvailableHotelsPage';
import LoginPage from './pages/LoginPage';
import RequireAuth from './components/requireAuth/RequireAuth';
import ErrorPage from './pages/ErrorPage';
import StyleMain from './styles/StyleMain';
import { lightAppTheme, darkAppTheme } from './styles/AppThemes';
import ThemeContext from './context/ThemeProviderContext';

function App() {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={lightTheme ? lightAppTheme : darkAppTheme}>
      <Router>
        <Header />
        <StyleMain>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/hotels/:hotelId" element={<AvailableHotelsPage />} />
              <Route path="/error" element={<ErrorPage />} />
            </Route>
          </Routes>
        </StyleMain>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
