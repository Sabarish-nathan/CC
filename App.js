import React, { useState } from 'react';
import Home from './home_book_my_stay';
import Payment from './payment_bms';

// Mock user data
const mockUsers = [];

// Main App Component
function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState({ email: '', password: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleRegister = () => {
    mockUsers.push(user); 
    setUser({ email: '', password: '' });
    setPage('login');
  };

  const handleLogin = () => {
    const userFound = mockUsers.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (userFound) {
      setPage('home'); 
    } else {
      alert('Invalid user register first');
    }
  };

  const getBackgroundStyle = () => {
    switch (page) {
      case 'login':
        return styles.loginBackground;
      case 'signup':
        return styles.signupBackground;
      case 'home':
        return styles.homeBackground;
      case 'payment':
        return styles.paymentBackground;
      default:
        return {};
    }
  };

  return (
    <div style={{ ...styles.appContainer, ...getBackgroundStyle() }}>
      {page === 'login' && (
        <div style={styles.pageContainer}>
          <h2 style={styles.title}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>Login</button>
          <p style={styles.linkText} onClick={() => setPage('signup')}>Not registered? Sign up here.</p>
        </div>
      )}

      {page === 'signup' && (
        <div style={styles.pageContainer}>
          <h2 style={styles.title}>Signup</h2>
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            style={styles.input}
          />
          <button onClick={handleRegister} style={styles.button}>Register</button>
          <p style={styles.linkText} onClick={() => setPage('login')}>Already registered? Go to login.</p>
        </div>
      )}

      {page === 'home' && (
        <Home 
          setSelectedHotel={setSelectedHotel} 
          navigateToPayment={() => setPage('payment')} 
        />
      )}

      {page === 'payment' && selectedHotel && (
        <Payment hotel={selectedHotel} navigateToHome={() => setPage('home')} />
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  pageContainer: {
    width: '350px',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1e88e5',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkText: {
    color: '#1e88e5',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  },
  // Page-Specific Backgrounds
  loginBackground: {
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.LxWpF69cCEYYGgOF3ofBbQHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  signupBackground: {
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.CzVwCAGLEyMCefkhu_iDlAHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  homeBackground: {
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.20moeCKV55OaEg4EBPGdKQHaER?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paymentBackground: {
    backgroundImage: 'url(https://th.bing.com/th/id/OIP.cJ6knShXSr08kzE2JiqCtgHaD4?w=345&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default App;