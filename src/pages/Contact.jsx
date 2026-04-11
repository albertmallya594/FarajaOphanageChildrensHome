import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-contact animate-fade-in">
      <section style={{ backgroundColor: 'var(--text-main)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#d6d3d1' }}>We would love to hear from you. Reach out to us for any inquiries, visits, or support.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          
          {/* Contact Details */}
          <div>
            <h2 className="section-title">Get in Touch</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '50%' }}>
                  <MapPin size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Arusha, Tanzania</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '50%' }}>
                  <Phone size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)' }}>+255 763 485 866</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '50%' }}>
                  <Mail size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)' }}>info@farajaorphanage.org</p>
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Follow & Connect</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://facebook.com/Farajamaliaki" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook
              </a>
              <a href="https://instagram.com/Farajaorphanage" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: '#e1306c', color: '#e1306c' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
              </a>
              <a href="https://wa.me/255763485866" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: 'white' }}>
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            
            {submitted ? (
              <div style={{ padding: '2rem', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Sent!</h4>
                <p>Thanks for reaching out. We will reply as soon as possible.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '1.5rem', borderColor: '#166534', color: '#166534' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" required className="form-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-input" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" required className="form-input" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea rows="5" required className="form-textarea" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'How are my donations utilized?', a: '100% of your public donations go directly towards our core programs: the Desk for Children Project, the Clean Water Initiative, and daily healthcare/nutrition needs of the children.' },
              { q: 'Can I sponsor a specific child?', a: 'Yes! Our child sponsorship program allows you to fund the education and living expenses for a specific child. You will receive termly updates on their progress.' },
              { q: 'What items can I donate in kind?', a: 'We accept gently used children\'s clothing, educational books in English or Swahili, stationery, and non-perishable food items. Please contact us prior to shipping.' },
              { q: 'Do you offer volunteer housing?', a: 'Yes, we have a safe and comfortable volunteer house located within walking distance of the orphanage. It includes basic amenities and 24/7 security.' }
            ].map((faq, index) => (
              <details key={index} style={{ backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <summary style={{ padding: '1.25rem 1.5rem', fontWeight: 700, cursor: 'pointer', outline: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {faq.q}
                  <span style={{ color: 'var(--primary)' }}>+</span>
                </summary>
                <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a 
          href="https://www.google.com/maps?newwindow=1&sca_esv=d0a1e93f4488cb4c&sxsrf=ANbL-n7qqVgNz3ptDZI_77f8EqkfdZ_PpQ:1775904017600&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5MB-rerWVUzYIWeP5MmTxfBURsID9Ypb5UUoCkcK3WmfB3LrjVZ5p8ot95XhaAAFET6nvtuXpx6_s5MHwYZl6DsToGhZRrW5Fo2CuFz0FqphrjFykNVEQ0fR6L9l44ztdsNcrgfA&biw=1280&bih=903&dpr=1&um=1&ie=UTF-8&fb=1&gl=tz&sa=X&geocode=KUMmYB1CEjcYMcYD68N7LMwI&daddr=TZ,+Shangarai+23100"
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'var(--primary)', 
            fontSize: '1.25rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            textDecoration: 'none',
            fontWeight: 500
          }}
        >
          <MapPin size={24} /> View Location on Google Maps
        </a>
      </section>
    </div>
  );
};

export default Contact;
