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
import Sponsorship from './pages/Sponsorship';

// Admin Pages
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';

const PAGE_META = {
  '/': {
    title: "Faraja Orphanage Children's Home | Care, Education & Community Support",
    description:
      "Faraja Orphanage Children's Home in Arusha, Tanzania provides shelter, education, healthcare, child sponsorship, and sustainable community development projects.",
  },
  '/about': {
    title: 'About Us | Faraja Orphanage Children\'s Home',
    description:
      'Learn the mission, history, leadership team, and community impact of Faraja Orphanage Children\'s Home in Arusha, Tanzania.',
  },
  '/activities': {
    title: 'What We Do | Faraja Programs for Children & Families',
    description:
      'Explore Faraja activities including education, clean water, shelter improvement, and family support programs for vulnerable children.',
  },
  '/sponsorship': {
    title: 'Child Sponsorship | Support a Child at Faraja Orphanage',
    description:
      'Sponsor a child through Faraja Orphanage and help provide school fees, meals, healthcare, and a safe loving home.',
  },
  '/development-projects': {
    title: 'Development Projects | Agriculture & Sustainability at Faraja',
    description:
      'Discover Faraja development projects including farming, poultry, livestock, and sustainable initiatives supporting long-term child welfare.',
  },
  '/volunteers': {
    title: 'Volunteer | Join Faraja Orphanage Community Support',
    description:
      'Volunteer with Faraja Orphanage and support vulnerable children through mentorship, outreach, and community service initiatives.',
  },
  '/donate': {
    title: 'Donate | Support Faraja Orphanage Children\'s Home',
    description:
      'Make a secure donation to Faraja Orphanage and help fund education, healthcare, food, shelter, and community support for children.',
  },
  '/contact': {
    title: 'Contact Us | Faraja Orphanage Children\'s Home',
    description:
      'Contact Faraja Orphanage Children\'s Home in Arusha, Tanzania for sponsorship, volunteering, donations, or partnership opportunities.',
  },
};

const upsertMeta = (selector, attributes) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const baseUrl = 'https://albertmallya594.github.io/FarajaOphanageChildrensHome';
    const normalizedPath = pathname === '/' ? '/' : pathname;
    const pageMeta = PAGE_META[normalizedPath] || PAGE_META['/'];

    document.title = pageMeta.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageMeta.description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageMeta.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageMeta.description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: `${baseUrl}/#${normalizedPath}`,
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageMeta.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageMeta.description,
    });
  }, [pathname]);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <PageLoader />
      <Navbar />
      <main id="main-content" tabIndex="-1" className="animate-fade-in" style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/development-projects" element={<DevelopmentProjects />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          
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
