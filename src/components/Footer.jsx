import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    monthlyUpdates: false,
    quarterlyNewsletters: false
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    success: false,
    error: null
  });
  
  const [validationErrors, setValidationErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.monthlyUpdates && !formData.quarterlyNewsletters) {
      errors.subscriptions = 'Please select at least one subscription option';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus(prev => ({
      ...prev,
      isSubmitting: true,
      error: null,
      success: false
    }));
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your backend
      console.log('Newsletter subscription:', formData);
      
      // Success
      setFormStatus({
        isSubmitting: false,
        success: true,
        error: null
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        monthlyUpdates: false,
        quarterlyNewsletters: false
      });
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        success: false,
        error: 'Something went wrong. Please try again later.'
      });
    }
  };

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
            .newsletter-input:focus { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(228, 93, 37, 0.2); }
            .newsletter-input.error { border-color: #ef4444; box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2); }
            .error-message { color: #ef4444; font-size: 0.75rem; margin-top: 0.25rem; }
            .success-message { background: #10b981; color: white; padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
            .error-alert { background: #ef4444; color: white; padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
            .checkbox-error { border: 1px solid #ef4444; border-radius: 4px; padding: 0.25rem; }
          `}
        </style>
        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800 }}>Stay in Touch</h2>
        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', maxWidth: '800px', margin: '0 auto', boxShadow: 'var(--shadow-lg)' }}>
          <h3 style={{ color: 'var(--secondary)', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>Keep Up with our Kids and Families</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Join our team of worldwide champions for children! Enjoy outreach success stories, updates from our children's village, and get to know our kids!
          </p>
          
          {/* Success Message */}
          {formStatus.success && (
            <div className="success-message">
              <CheckCircle size={20} />
              <span>Thank you for joining our family! You'll receive updates soon.</span>
            </div>
          )}
          
          {/* Error Message */}
          {formStatus.error && (
            <div className="error-alert">
              <AlertCircle size={20} />
              <span>{formStatus.error}</span>
            </div>
          )}
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }} onSubmit={handleSubmit}>
            <div className="newsletter-grid">
              <div>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`newsletter-input ${validationErrors.firstName ? 'error' : ''}`} 
                  placeholder="Enter your first name here" 
                  required 
                />
                {validationErrors.firstName && (
                  <div className="error-message">{validationErrors.firstName}</div>
                )}
              </div>
              <div>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`newsletter-input ${validationErrors.lastName ? 'error' : ''}`} 
                  placeholder="Enter your last name here" 
                  required 
                />
                {validationErrors.lastName && (
                  <div className="error-message">{validationErrors.lastName}</div>
                )}
              </div>
            </div>
            <div className="newsletter-row">
               <div style={{ flex: 1.5 }}>
                 <input 
                   type="email" 
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   className={`newsletter-input ${validationErrors.email ? 'error' : ''}`} 
                   placeholder="Enter your email" 
                   required 
                 />
                 {validationErrors.email && (
                   <div className="error-message">{validationErrors.email}</div>
                 )}
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '0.5rem' }}>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} className={validationErrors.subscriptions ? 'checkbox-error' : ''}>
                   <input 
                     type="checkbox" 
                     name="monthlyUpdates"
                     checked={formData.monthlyUpdates}
                     onChange={handleInputChange}
                   /> Monthly Updates
                 </label>
                 <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} className={validationErrors.subscriptions ? 'checkbox-error' : ''}>
                   <input 
                     type="checkbox" 
                     name="quarterlyNewsletters"
                     checked={formData.quarterlyNewsletters}
                     onChange={handleInputChange}
                   /> Quarterly Newsletters
                 </label>
                 {validationErrors.subscriptions && (
                   <div className="error-message">{validationErrors.subscriptions}</div>
                 )}
               </div>
            </div>
            <button 
              type="submit" 
              className="hover-lift btn-primary" 
              style={{ 
                padding: '0.875rem', 
                borderRadius: 'var(--radius-sm)', 
                fontWeight: 600, 
                border: 'none', 
                cursor: formStatus.isSubmitting ? 'not-allowed' : 'pointer', 
                marginTop: '1rem', 
                width: '100%',
                opacity: formStatus.isSubmitting ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }} 
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  <span>Joining our family...</span>
                </>
              ) : (
                'Join our family'
              )}
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                 {!logoError ? (
                  <img 
                    src={logoImg} 
                    alt="Faraja Logo" 
                    style={{ height: '75px', width: 'auto' }} 
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>
                    <Heart size={28} fill="var(--primary)" />
                    Faraja
                  </div>
                )}
              </Link>
              <p style={{ color: '#a8a29e', maxWidth: '400px', marginBottom: '1.5rem' }}>
                Providing a haven of comfort and a future of hope. We transform lives through education, healthcare, and a loving community.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.facebook.com/share/1EQxTfgGz9/" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/farajaopharnage?igsh=MXJmcTVoNTZxcHVjdA==" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white' }}>
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
              <a href="https://share.google/RNgHbUlxCkIs4Csxq" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>View Project Documents</span>
              </a>
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

            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.25rem' }}>Find Us</h4>
              <div style={{ 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)', 
                height: '150px', 
                position: 'relative',
                marginBottom: '1rem'
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.36569281455!2d-3.3955256999999998!3d36.7585194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183712421d602643:0x8cc2c7bc3eb03c6!2sFARAJA+ORPHANAGE+CHILDREN%27S+HOME!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Faraja Orphanage Children's Home Location"
                />
              </div>
              <a 
                href="https://google.com/maps/dir//FARAJA+ORPHANAGE+CHILDREN'S+HOME,+TZ,+Shangarai+23100/@-6.1163215,34.8616849,10z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x183712421d602643:0x8cc2c7bc3eb03c6!2m2!1d36.7585194!2d-3.3777305?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'white', 
                  textDecoration: 'underline',
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <MapPin size={14} />
                Get Directions
              </a>
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
