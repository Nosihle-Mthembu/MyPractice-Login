import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');

  const handleRegister = () => {
    // Add code to handle registration, such as sending data to the backend
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6", width:"100%", height:"90%", alignContent:"center"}}>
      <div style={{ width: "20%",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        fontSize: "16px",
        padding: "1% 0% 2% 3%",
        marginLeft:"40%"
        }}>
        <h2 style={{textDecoration:"underline"}}>Register</h2>
        <input
          type="password"
          placeholder="Enter your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
