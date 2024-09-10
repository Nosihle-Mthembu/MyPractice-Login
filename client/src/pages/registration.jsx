import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!lastname) errors.lastname = 'Lastname is required';
    if (!cellphone) errors.cellphone = 'Cellphone number is required';
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setSuccessMessage('');

      fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, name, lastname, cellphone }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuccessMessage('Registration successful! Please Log in');
            setUsername('');
            setPassword('');
            setName('');
            setLastname('');
            setCellphone('');
          } else {
            setErrors({ ...errors, server: data.message || 'Registration failed. Please try again.' });
          }
        })
        .catch((error) => setErrors({ ...errors, server: 'Error: ' + error.message }))
        .finally(() => setIsLoading(false)); 
    }
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "30%", boxSizing: "border-box", border: "2px solid #ccc", fontSize: "16px", padding: "2%", backgroundColor: "#fff", borderRadius: "5px" }}>
        <h2 style={{ textDecoration: "underline" }}>Register</h2>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter your Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {errors.lastname && <span style={{ color: "red" }}>{errors.lastname}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter your Cellphone Number"
              value={cellphone}
              onChange={(e) => setCellphone(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {errors.cellphone && <span style={{ color: "red" }}>{errors.cellphone}</span>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
          </div>
          {errors.server && <div style={{ color: "red", marginBottom: "10px" }}>{errors.server}</div>}
          {successMessage && <div style={{ color: "green", marginBottom: "10px" }}>{successMessage}</div>}
          <button type="submit" disabled={isLoading} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "#fff" }}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
