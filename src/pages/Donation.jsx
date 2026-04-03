import React, { useState } from 'react';
import { CreditCard, Landmark, Phone, Heart } from 'lucide-react';

const Donation = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', method: 'M-Pesa' });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = customAmount || amount;

  const handleNext = (e) => {
    e.preventDefault();
    if (finalAmount) setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock save
    const existing = JSON.parse(localStorage.getItem('faraja_donations') || '[]');
    localStorage.setItem('faraja_donations', JSON.stringify([...existing, { ...formData, amount: finalAmount, date: new Date().toISOString() }]));
    setSubmitted(true);
  };

  return (
    <div className="page-donate animate-fade-in">
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <Heart size={48} fill="white" style={{ margin: '0 auto 1rem' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Make a Donation</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>Your support directly provides education, meals, and safety to our children.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          
          {/* Form Side */}
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contribute Now</h2>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#dcf8c6', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Heart size={40} fill="#166534" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank You, {formData.name}!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Your pledge of ${finalAmount} has been recorded. Please complete your transfer using the details provided.</p>
              </div>
            ) : step === 1 ? (
              <form onSubmit={handleNext}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>1. Select Amount (USD)</h3>
                <div className="grid-3" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
                  {['25', '50', '100'].map(val => (
                    <button 
                      key={val} 
                      type="button"
                      onClick={() => { setAmount(val); setCustomAmount(''); }}
                      style={{ 
                        padding: '1rem', 
                        border: `2px solid ${amount === val && !customAmount ? 'var(--primary)' : '#e5e7eb'}`,
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        backgroundColor: amount === val && !customAmount ? 'rgba(245, 158, 11, 0.1)' : 'white'
                      }}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
                <div className="form-group">
                  <label className="form-label">Or enter custom amount:</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--text-muted)' }}>$</span>
                    <input 
                      type="number" 
                      className="form-input" 
                      style={{ paddingLeft: '2rem' }} 
                      placeholder="Other Amount" 
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!finalAmount}>Proceed to Details</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>2. Your Details</h3>
                  <button type="button" onClick={() => setStep(1)} style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>Edit Amount (${finalAmount})</button>
                </div>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" required className="form-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Payment Method</label>
                  <select required className="form-select" value={formData.method} onChange={e => setFormData({...formData, method: e.target.value})}>
                    <option value="M-Pesa">M-Pesa Mobile Money</option>
                    <option value="Bank">Bank Transfer</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Pledge Donation</button>
              </form>
            )}
          </div>

          {/* Details Side */}
          <div>
            <h2 className="section-title">Payment Instructions</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-6" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              To complete your donation, please transfer the funds using one of our official methods below. Contact us if you need help with international transfers.
            </p>

            <div style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>
                <Phone color="#059669" size={24} />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Mobile Payment (M-Pesa)</h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Network:</span> <strong>Vodacom M-Pesa</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Name:</span> <strong>Faraja Needy</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700 }}><span style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 400 }}>Number:</span> +255 763 485 866</p>
              </div>
            </div>

            <div style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>
                <Landmark color="#2563eb" size={24} />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Bank Transfer</h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Bank Name:</span> <strong>CRDB</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Account Name:</span> <strong>Faraja Needy</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>Account Number:</span> <strong>015C892566500</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-muted)' }}>SWIFT Code:</span> <strong>CORUTZTZ</strong></p>
                <p style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Address:</span> <strong>Arusha, Tanzania</strong></p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Donation;
