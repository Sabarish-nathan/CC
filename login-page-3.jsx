import React, { useState } from 'react';

function LoginPage({ onRegisterClick, onLoginClick }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'Prithivi_rajan' && password === 'Password@123') {
            console.log('Login successful!');
            onLoginClick(); // Navigate to home page on successful login
        } 
        else 
        {
            console.log('Login successful!');
            onLoginClick(); // Navigate to home page on successful login

        }
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{10,}$/;
        return passwordRegex.test(password);
    };

    return (
        <div id="app">
            <div id="background"></div>
            <div id="logo" className="logo"></div>
            <div id="content">
                <div className="border">
                    <div className="head">
                        <h1 className="head-title" style={{ fontSize: '36px', fontStyle: 'italic', color: '#333333' }}>Login Page</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="label" style={{ fontSize: '24px', fontStyle: 'italic', color: '#666666' }}>Username:</label>
                        <span style={{ marginRight: '50px' }}></span>
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #CCCCCC' }} />
                        <br />
                        <br />
                        <label className="label" style={{ fontSize: '24px', fontStyle: 'italic', color: '#666666' }}>Password:</label>
                        <span style={{ marginRight: '55px' }}></span>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #CCCCCC' }} />
                        <br />
                        <br />
                        {error && <div className="error" style={{ fontSize: '18px', color: '#FF0000' }}>{error}</div>}
                        {!validatePassword(password) && password !== '' && (
                            <div className="error" style={{ fontSize: '18px', color: '#FF0000' }}>
                              </div>
                        )}
                        <br />
                        <div id="display1" className="display1">
                            <button type="submit" className="button" style={{ fontSize: '24px', fontStyle: 'italic', backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '15px 30px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Login</button> 
                            <span style={{ marginRight: '100px' }}></span>
                            <br></br>
                            <br></br>
                            <p><b>New User Register here</b></p>
                            <br></br>
                            <button type="button" className="button" onClick={onRegisterClick} style={{ fontSize: '24px', fontStyle: 'italic', backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '15px 30px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>New Registration</button>
                        </div>
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
            background-image: url("https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=");
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
export default LoginPage;
