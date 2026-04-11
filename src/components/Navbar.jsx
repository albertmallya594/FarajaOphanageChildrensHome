import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} style={{
      padding: scrolled ? '0.5rem 0' : '1.25rem 0',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {!logoError ? (
            <img 
              src={logoImg} 
              alt="Faraja Logo" 
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ 
                height: scrolled ? '50px' : '65px', 
                width: 'auto',
                transition: 'height 0.3s ease'
              }} 
              onError={() => setLogoError(true)}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>
              <Heart size={28} fill="var(--primary)" />
              Faraja
            </div>
          )}
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`} style={{
           display: 'flex',
           gap: '2rem',
           alignItems: 'center',
           listStyle: 'none'
        }}>
          <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/activities" className={`nav-link ${isActive('/activities')}`} onClick={() => setIsMenuOpen(false)}>What We Do</Link></li>
          <li><Link to="/sponsorship" className={`nav-link ${isActive('/sponsorship')}`} onClick={() => setIsMenuOpen(false)}>Sponsorship</Link></li>
          <li><Link to="/development-projects" className={`nav-link ${isActive('/development-projects')}`} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/volunteers" className={`nav-link ${isActive('/volunteers')}`} onClick={() => setIsMenuOpen(false)}>Get Involved</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/donate" className="btn btn-primary" onClick={() => setIsMenuOpen(false)} style={{ padding: '0.6rem 1.5rem' }}>
              <Heart size={18} fill="white" />
              Donate
            </Link>
          </li>
        </ul>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          style={{ 
            display: 'none', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            color: 'var(--text-main)',
            zIndex: 1002
          }}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
            position: fixed;
            top: 0;
            right: -100% !important;
            width: 85%;
            max-width: 320px;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: center;
            padding: 2rem;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            z-index: 1001;
            gap: 1.5rem;
          }
          .nav-links.mobile-open {
            right: 0 !important;
          }
          .nav-link {
             font-size: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
