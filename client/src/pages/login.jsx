import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === username && password === password) {
      onLogin(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6", width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "30%", boxSizing: "border-box", border: "2px solid #ccc", fontSize: "16px", padding: "2%", backgroundColor: "#fff", borderRadius: "5px" }}>
        <h2 style={{ textDecoration: "underline" }}>Log In</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
          <p>
            Don't have an account? 
            <Link to="/registration" style={{ fontSize: "95%" }}> Sign Up</Link>.
          </p>
          <button type="submit" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "#fff" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
