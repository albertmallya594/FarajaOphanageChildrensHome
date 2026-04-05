import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { useEffect } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Volunteers from './pages/Volunteers';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import DevelopmentProjects from './pages/DevelopmentProjects';

// Admin Pages
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <PageLoader />
      <Navbar />
      <main className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/development-projects" element={<DevelopmentProjects />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
