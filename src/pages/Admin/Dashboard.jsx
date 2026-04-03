import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, DollarSign, Image, LogOut } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('volunteers');
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const isAuth = localStorage.getItem('faraja_admin_auth');
    if (!isAuth) {
      navigate('/admin');
    }
    
    setVolunteers(JSON.parse(localStorage.getItem('faraja_volunteers') || '[]'));
    setDonations(JSON.parse(localStorage.getItem('faraja_donations') || '[]'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('faraja_admin_auth');
    navigate('/admin');
  };

  const trStyle = { borderBottom: '1px solid #e5e7eb' };
  const thStyle = { padding: '1rem', textAlign: 'left', backgroundColor: '#f8fafc', color: 'var(--text-muted)' };
  const tdStyle = { padding: '1rem', borderBottom: '1px solid #e5e7eb' };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '2rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', backgroundColor: 'white', padding: '1.5rem 2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn" style={{ color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LogOut size={20} /> Logout
          </button>
        </div>

        <div className="grid-2" style={{ gridTemplateColumns: '250px 1fr', gap: '2rem', alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <button 
                  onClick={() => setActiveTab('volunteers')}
                  style={{ width: '100%', padding: '1rem', textAlign: 'left', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: activeTab === 'volunteers' ? '#eff6ff' : 'transparent', color: activeTab === 'volunteers' ? '#2563eb' : 'var(--text-main)', fontWeight: activeTab === 'volunteers' ? 600 : 400 }}
                >
                  <Users size={20} /> Volunteer Submissions
                </button>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <button 
                  onClick={() => setActiveTab('donations')}
                  style={{ width: '100%', padding: '1rem', textAlign: 'left', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: activeTab === 'donations' ? '#eff6ff' : 'transparent', color: activeTab === 'donations' ? '#2563eb' : 'var(--text-main)', fontWeight: activeTab === 'donations' ? 600 : 400 }}
                >
                  <DollarSign size={20} /> Donation Records
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('gallery')}
                  style={{ width: '100%', padding: '1rem', textAlign: 'left', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: activeTab === 'gallery' ? '#eff6ff' : 'transparent', color: activeTab === 'gallery' ? '#2563eb' : 'var(--text-main)', fontWeight: activeTab === 'gallery' ? 600 : 400 }}
                >
                  <Image size={20} /> Update Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', overflowX: 'auto' }}>
            
            {activeTab === 'volunteers' && (
              <>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Volunteer Submissions ({volunteers.length})</h2>
                {volunteers.length === 0 ? <p>No volunteers yet.</p> : (
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Skill</th>
                        <th style={thStyle}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers.map((v, i) => (
                        <tr key={i} style={trStyle}>
                          <td style={tdStyle}>{new Date(v.date).toLocaleDateString()}</td>
                          <td style={tdStyle}>{v.name}</td>
                          <td style={tdStyle}>{v.email}</td>
                          <td style={tdStyle}>{v.skills}</td>
                          <td style={tdStyle}>{v.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}

            {activeTab === 'donations' && (
              <>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Donation Records ({donations.length})</h2>
                {donations.length === 0 ? <p>No donations recorded yet.</p> : (
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Method</th>
                        <th style={thStyle}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map((d, i) => (
                        <tr key={i} style={trStyle}>
                          <td style={tdStyle}>{new Date(d.date).toLocaleDateString()}</td>
                          <td style={tdStyle}>{d.name}</td>
                          <td style={tdStyle}>{d.email}</td>
                          <td style={tdStyle}>{d.method}</td>
                          <td style={tdStyle}>${d.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}

            {activeTab === 'gallery' && (
              <div style={{ textAlign: 'center', padding: '3rem' }}>
                <Image size={48} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Gallery Management</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>This feature is configured to integrate with an external storage bucket (e.g. AWS S3 or Firebase Storage) which is outside the scope of this prototype.</p>
                <button className="btn btn-primary" disabled style={{ opacity: 0.5 }}>Upload New Photos...</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
