import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Services/api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await register(username, password);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <>
      <h2>Signup</h2>
    <form onSubmit={handleSignup}>
      <label >Username
      <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      </label>
      <label >Password
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      </label>
      <button type="submit">Signup</button>
    </form>
    </>
  );
};

export default Signup;
