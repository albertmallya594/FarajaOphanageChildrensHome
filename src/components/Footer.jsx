import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <section style={{ backgroundColor: 'var(--primary)', padding: '4rem 1rem', textAlign: 'center' }}>
        <style>
          {`
            .newsletter-grid { display: flex; flex-direction: column; gap: 1rem; }
            .newsletter-row { display: flex; flex-direction: column; gap: 1rem; }
            @media(min-width: 640px) {
              .newsletter-grid { flex-direction: row; }
              .newsletter-grid > * { flex: 1; }
              .newsletter-row { flex-direction: row; align-items: center; }
              .newsletter-row > input { flex: 1.5; }
              .newsletter-row > div { flex: 1; text-align: left; }
            }
            .newsletter-input { padding: 0.75rem 1rem; border: 1px solid #e5e7eb; border-radius: var(--radius-full); background: #f8fafc; width: 100%; outline: none; font-family: inherit; }
            .newsletter-input:focus { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2); }
          `}
        </style>
        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Stay in Touch</h2>
        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', maxWidth: '800px', margin: '0 auto', boxShadow: 'var(--shadow-lg)' }}>
          <h3 style={{ color: '#1e3a8a', fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 700 }}>Keep Up with our Kids and Families</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Join our team of worldwide champions for children! Enjoy outreach success stories, updates from our children's village, and get to know our kids!
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }} onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-grid">
              <input type="text" className="newsletter-input" placeholder="Enter your first name here" required />
              <input type="text" className="newsletter-input" placeholder="Enter your last name here" required />
            </div>
            <div className="newsletter-row">
               <input type="email" className="newsletter-input" placeholder="Enter your email" required />
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                   <input type="checkbox" /> Monthly Updates
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                   <input type="checkbox" /> Quarterly Newsletters
                 </label>
               </div>
            </div>
            <button type="submit" className="hover-lift" style={{ backgroundColor: '#8b0000', color: 'white', padding: '0.875rem', borderRadius: 'var(--radius-sm)', fontWeight: 600, border: 'none', cursor: 'pointer', marginTop: '1rem', width: '100%' }}>
              Join our family
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Heart size={28} fill="var(--primary)" />
                Faraja
              </Link>
              <p style={{ color: '#a8a29e', maxWidth: '400px', marginBottom: '1.5rem' }}>
                Providing a haven of comfort and a future of hope. We transform lives through education, healthcare, and a loving community.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://facebook.com/Farajamaliaki" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://instagram.com/Farajaorphanage" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.25rem' }}>Quick Links</h4>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/activities" className="footer-link">Our Activities</Link>
              <Link to="/volunteers" className="footer-link">Volunteer With Us</Link>
              <Link to="/donate" className="footer-link">Make a Donation</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>

            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.25rem' }}>Contact Info</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#a8a29e' }}>
                <MapPin size={20} color="var(--primary)" />
                <span>Arusha, Tanzania</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#a8a29e' }}>
                <Phone size={20} color="var(--primary)" />
                <span>+255 763 485 866</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#a8a29e' }}>
                <Mail size={20} color="var(--primary)" />
                <span>info@farajaorphanage.org</span>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #44403c', paddingTop: '2rem', textAlign: 'center', color: '#a8a29e', fontSize: '0.875rem' }}>
            <p>&copy; {new Date().getFullYear()} Faraja Orphanage Children's Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
