import React, { useState } from 'react';

function RegisterPage({ onRegisterClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    }  else {
      console.log('Registration successful!');
      setSuccess(true);
      // Simulate a redirect after a successful registration
      setTimeout(() => {
        onRegisterClick(); // Navigate to the login page
      }, 2000);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{10,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div id="app">
      <div id="background"></div>
      <div id="logo" className="logo">
    
      </div>
      <div id="content">
        <div className="border">
          <div className="head">
            <h1 className="head-title" style={{ fontSize: '36px', fontStyle: 'italic', color: '#333333' }}>Register Page</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="label" style={{ fontSize: '24px', fontStyle: 'italic', color: '#666666' }}>Username:</label>
            <span style={{ marginRight: '100px' }}></span>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #CCCCCC' }} required />
            <br />
            <br />
            <label className="label" style={{ fontSize: '24px', fontStyle: 'italic', color: '#666666' }}>Password:</label>
            <span style={{ marginRight: '105px' }}></span>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #CCCCCC' }} required />
            <br />
            {password && !validatePassword(password) && (
              <div className="error" style={{ fontSize: '18px', color: '#FF0000' }}>
               </div>
            )}
            <br />
            <label className="label" style={{ fontSize: '24px', fontStyle: 'italic', color: '#666666' }}>Confirm Password:</label>
            <span style={{ marginRight: '20px' }}></span>
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #CCCCCC' }} required />
            <br />
            {confirmPassword && confirmPassword !== password && (
              <div className="error" style={{ fontSize: '18px', color: '#FF0000' }}>Passwords do not match.</div>
            )}
            <br />
            {error && <div className="error" style={{ fontSize: '18px', color: '#FF0000' }}>{error}</div>}
            {success && (
              <div className="success" style={{ fontSize: '18px', color: '#4CAF50' }}>
                Registration successful! Redirecting to login page...
              </div>
            )}
            <br />
            <button type="submit" className="button" style={{ fontSize: '24px', fontStyle: 'italic', backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '15px 30px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Register</button>
          </form>
        </div>
      </div>
      <style>
        {`
          #app {
            position: relative;
            width: 100%;
            height: 100vh;
          }

          #background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("https://thumbs.dreamstime.com/b/young-man-receptionist-stands-reception-desk-front-view-vector-flat-illustration-office-hall-interior-design-green-plants-74466771.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            filter: blur(5px);
            z-index: -1;
          }

          #logo {
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
          }

          #content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .border {
           
                    background: rgba(255, 255, 255, 0.5);
                    border: 1px solid #CCCCCC;
                    padding: 40px;
                    width: 800px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                }

                .head {
                    margin-bottom: 40px;
                }

                .head-title {
                    color: #333333;
                    font-family: 'Arial', sans-serif;
                    font-size: 50px;
                    font-style: italic;
                    text-align: center;
                }

                .label {
                    margin-top: 20px;
                    color: #666666;
                    font-style: italic;
                }

                .error {
                    color: #FF0000;
                }

                .button {
                    font-size: 28px;
                    font-style: italic;
                    background-color: #4CAF50;
                    color: #FFFFFF;
                    padding: 20px 40px;
                    cursor: pointer;
                    margin-right: 10px;
                    border: none;
                }

                .button:hover {
                    background-color: #3e8e41;
                }
            `}
        </style>
    </div>
);
}

export default RegisterPage;