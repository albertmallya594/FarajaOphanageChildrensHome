import React, { useState } from 'react';
import { MessageCircle, Wrench, GraduationCap, Stethoscope } from 'lucide-react';
import getInvolvedImg from '../assets/getinvolved/volunters.jpeg';

const Volunteers = () => {
  const [formData, setFormData] = useState({ name: '', email: '', skills: '', duration: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mocking submission to Local Storage for temporary admin view
    const existing = JSON.parse(localStorage.getItem('faraja_volunteers') || '[]');
    localStorage.setItem('faraja_volunteers', JSON.stringify([...existing, { ...formData, date: new Date().toISOString() }]));
    setSubmitted(true);
    setFormData({ name: '', email: '', skills: '', duration: '', message: '' });
  };

  return (
    <div className="page-volunteers animate-fade-in">
      <section style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(49, 34, 34, 0.22), rgba(12, 74, 110, 0.85)), url(${getInvolvedImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Volunteer With Us</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#e0f2fe' }}>Share your skills, time, and love. Become part of the Faraja family.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Info Side */}
          <div>
            <h2 className="section-title">Why Volunteer?</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              Volunteering at Faraja is a life-changing experience. Our volunteers bring fresh energy, diverse skills, and extra hands that make a significant impact on our children's daily lives and our organization's capabilities.
            </p>
            
            <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem' }}>Volunteer Categories</h3>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <GraduationCap size={32} color="var(--primary)" className="mb-2" />
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Education</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Tutoring, extra-curricular activities, and skills training.</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <Stethoscope size={32} color="var(--secondary)" className="mb-2" />
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Health</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Medical checkups, hygiene education, and nutritional planning.</p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', gridColumn: '1 / -1' }}>
                <Wrench size={32} color="var(--text-main)" className="mb-2" />
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Maintenance</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Facility repairs, painting, gardening, and technical support.</p>
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#dcf8c6', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#075e54' }}>Prefer to chat directly?</h3>
              <a href="https://wa.me/255763485866" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle size={20} /> Chat with us on WhatsApp
              </a>
              <p style={{ marginTop: '1rem', color: '#128C7E', fontWeight: 500 }}>+255 763 485 866</p>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Application Form</h3>
            
            {submitted ? (
              <div style={{ padding: '2rem', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Application Received!</h4>
                <p>Thank you for your interest in volunteering. We will be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: '#166534', color: '#166534' }}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" required className="form-input" placeholder="Jane Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-input" placeholder="jane@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Key Skills / Category</label>
                  <select required className="form-select" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})}>
                    <option value="">Select an area...</option>
                    <option value="Education">Education & Tutoring</option>
                    <option value="Healthcare">Healthcare & Nutrition</option>
                    <option value="Maintenance">Maintenance & Repairs</option>
                    <option value="Other">Other Skills</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Available Duration</label>
                  <input type="text" required className="form-input" placeholder="e.g. 2 weeks in August" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message / Motivation</label>
                  <textarea rows="4" required className="form-textarea" placeholder="Tell us a bit about why you want to volunteer..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Volunteers;
