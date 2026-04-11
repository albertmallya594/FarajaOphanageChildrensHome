import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the loader for at least 500ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity 0.5s ease',
      animation: 'fadeOut 0.5s ease 0.6s forwards'
    }}>
      <div className="loader-spinner" style={{
        width: '50px',
        height: '50px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid var(--primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
        Loading Hope...
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeOut {
          from { opacity: 1; visibility: visible; }
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
