import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setEmail(''); 
      setPassword(''); 
      localStorage.setItem('token', data.token);
      navigate('/welcomePage');
    } else {
      setError(data.message || 'Login failed');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', width: '24rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem' }}>Login</h2>
        {error && <div style={{ color: '#f56565', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Email</label>
            <input
              type="email"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Password</label>
            <input
              type="password"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#4299e1', color: '#fff', padding: '0.75rem', borderRadius: '0.25rem', hover: { backgroundColor: '#3182ce' } }}>
            Login
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>
            Don’t have an account?{' '}
            <a href="/register" style={{ color: '#4299e1', textDecoration: 'underline' }}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
