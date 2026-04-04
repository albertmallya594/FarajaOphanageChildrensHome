import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
        
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/activities" className={`nav-link ${isActive('/activities')}`} onClick={() => setIsMenuOpen(false)}>Activities</Link></li>
          <li><Link to="/cow-project" className={`nav-link ${isActive('/cow-project')}`} onClick={() => setIsMenuOpen(false)}>Cow Project</Link></li>
          <li><Link to="/volunteers" className={`nav-link ${isActive('/volunteers')}`} onClick={() => setIsMenuOpen(false)}>Volunteers</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/donate" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              <Heart size={18} fill="white" />
              Donate
            </Link>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'block' }}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style>{`
        .mobile-menu-btn {
          display: none !important;
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-md);
            display: none;
          }
          .nav-links.mobile-open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
