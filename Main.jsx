import React, { useState } from 'react';
import LoginPage from './login-page-3';
import App from './homepg';
import RegisterPage from './Sign-up2';
function Appmain() {
  const [currentPage, setCurrentPage] = useState('login');
  const navigateToRegister = () => {
    setCurrentPage('register');
  };
  const navigateToLogin = () => {
    setCurrentPage('login');
  };
  const navigateToHome = () => {
    setCurrentPage('home');
  };
  return (
    <div>
      {currentPage === 'login' && (
        <LoginPage onRegisterClick={navigateToRegister} onLoginClick={navigateToHome} />
      )}
      {currentPage === 'register' && (
        <RegisterPage onRegisterClick={navigateToLogin} />
      )}
      {currentPage === 'home' && <App />}
    </div>
  );
}
export default Appmain;
