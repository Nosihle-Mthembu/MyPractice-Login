import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6", width:"100%", height:"90%", alignContent:"center"}}>
    <div style={{
      width: "20%",
      boxSizing: "border-box",
      border: "2px solid #ccc",
      fontSize: "16px",
      backgroundColor: "#e6e6e6",
      backgroundPosition: "50px 50px",
      padding: "1% 0% 2% 3%",
      marginLeft:"40%",
      }}>
      <h2 style={{textDecoration:"underline"}}>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
           <input
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
           />
         </div>
         <div>
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>
         {error && <p style={{ color: 'red' }}>{error}</p>}
         <button type="submit">Login</button>
       </form>
    </div>
    </div>
  );
}

export default Login;
