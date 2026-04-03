import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Heart } from 'lucide-react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      localStorage.setItem('faraja_admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password. Try "admin123".');
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--background)' }}>
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <Lock size={32} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Admin Access</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Secure portal for internal management.</p>
        
        {error && <div style={{ color: 'var(--danger)', backgroundColor: '#fee2e2', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ textAlign: 'left' }}>
            <label className="form-label">Password</label>
            <input type="password" required className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login Area</button>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#a8a29e' }}>Powered by <Heart size={12} fill="currentColor" /> Faraja Systems</p>
      </div>
    </div>
  );
};

export default Login;
