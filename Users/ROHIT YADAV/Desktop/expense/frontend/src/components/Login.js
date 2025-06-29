// frontend/src/components/Login.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import axios from 'axios';
import '../styles/Login.css'; // Optional styling

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();

      await axios.post('http://localhost:5000/api/auth/verify', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onLoginSuccess();
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCred = await signInWithPopup(auth, googleProvider);
      const token = await userCred.user.getIdToken();

      await axios.post('http://localhost:5000/api/auth/verify', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onLoginSuccess();
    } catch (err) {
      alert('Google login failed: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Expense Tracker</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleEmailLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
