import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER'); 
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [success, setSuccess] = useState(''); // Add success state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/register-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneNumber, password, role, userName }),
    });

    const data = await response.json();

    if (response.ok) {
      setName(''); 
      setEmail(''); 
      setPhoneNumber(''); 
      setPassword(''); 
      setRole('USER');
      setUserName(''); 
      setError(''); 
      setSuccess('Registration successful!'); 
      setTimeout(() => {
        navigate('/login'); // Navigate to login after a delay
      }, 2000); // Delay for 2 seconds
    } else {
      setError(data.message || 'Registration failed');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', width: '24rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginBottom: '1.5rem' }}>Register</h2>
        {error && <div style={{ color: '#f56565', textAlign: 'center', marginBottom: '1rem' }}>{error}</div>}
        {success && <div style={{ color: '#48bb78', textAlign: 'center', marginBottom: '1rem' }}>{success}</div>} {/* Display success message */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Name</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            <label style={{ display: 'block', color: '#4a5568' }}>Phone Number</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>Role</label>
            <select
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: '#4a5568' }}>UserName</label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem', marginTop: '0.25rem' }}
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button type="submit" style={{ width: '100%', backgroundColor: '#4299e1', color: '#fff', padding: '0.75rem', borderRadius: '0.25rem', hover: { backgroundColor: '#3182ce' } }}>
            Register
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#4299e1', textDecoration: 'underline' }}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
