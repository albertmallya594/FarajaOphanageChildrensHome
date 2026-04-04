import { Link } from 'react-router-dom';
import { Heart, Users, CheckCircle, Clock, ChevronRight, BookOpen } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Images
import heroImg from '../assets/hero_children_smiling.png';
import communityImg from '../assets/community_support.png';
import child1 from '../assets/child_portrait_1.png';

const StatCounter = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-card" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
      <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="page-home animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', margin: '0 auto 1.5rem', lineHeight: 1.1 }}>
            Providing a Haven of Comfort and a Future of Hope
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            At Faraja Orphanage Children's Home, we transform lives through education, healthcare, and a loving community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Donate to Faraja
            </Link>
            <Link to="/about" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.125rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(4px)' }}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Support Bar */}
      <div style={{
        backgroundColor: 'var(--accent)',
        padding: '1rem 0',
        position: 'sticky',
        top: '70px',
        zIndex: 40,
        boxShadow: 'var(--shadow-md)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.125rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>M-Pesa:</span>
            <span>+255 763 485 866</span>
          </div>
          <Link to="/donate" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Donate Now</Link>
        </div>
      </div>

      {/* Community Section - OLF Style */}
      <section style={{ backgroundColor: '#f5f5f5', padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-main)', maxWidth: '600px', margin: '0 auto 1rem', lineHeight: 1.4 }}>
              By supporting an orphan you are supporting an entire community.
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div className="community-panels">
            {[
              {
                label: 'Our mission',
                img: communityImg,
                to: '/about'
              },
              {
                label: 'What we do',
                img: heroImg,
                to: '/activities'
              },
              {
                label: 'Where we serve',
                img: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                to: '/about'
              }
            ].map((card, idx) => (
              <Link
                key={idx}
                to={card.to}
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '340px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: 'block'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Dark overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)'
                }}></div>
                {/* Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  color: 'white',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}>
                  {card.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tangible Impact Stats */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Our Tangible Impact</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
            <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Through the generous support of our partners, we make real, measurable changes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <StatCounter end={50} suffix="+" label="Children Residing" />
            <StatCounter end={100} suffix="%" label="School Attendance" />
            <StatCounter end={15} suffix="" label="Water Wells Built" />
            <StatCounter end={1200} suffix="+" label="Blankets Distributed" />
          </div>
          <div style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', marginTop: '2rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Over $20,000 in School Supplies Gifted</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Providing uniforms, textbooks, and tuition assistance to ensure no child is left behind in education.</p>
          </div>
        </div>
      </section>

      {/* Keeping Families Together (General Program Info) */}
      <section className="section section--light">
        <div className="container grid-2">
          <div className="image-wrapper hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={communityImg} alt="Community Support" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="content-wrapper">
            <h2 className="section-title">Keeping Families Together</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              At Faraja Orphanage Children’s Home, we believe that every child deserves to grow up in a loving and supportive environment. While we provide a safe home for vulnerable children, we also work closely with families in the community to prevent separation whenever possible.
            </p>
            <p className="mb-6" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              Through counseling, basic support, and education assistance, we empower families to stay united and provide a stable future for their children. By strengthening families, we build stronger communities and ensure that no child feels alone or abandoned.
            </p>
            <Link to="/activities" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Learn More About Family Programs <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      {/* Meet Rehema (Storytelling Section) */}
      <section className="section section--light">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="content-wrapper" style={{ order: 2 }}>
            <h2 className="section-title">Meet Rehema</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              Rehema is 10 years old. She lives in one of our family houses at Faraja. When we first found Rehema, she had been tragically orphaned by the sudden loss of her parents and faced severe malnutrition.
            </p>
            <p className="mb-6" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              Due to the lack of immediate extended family support, she was left to fend for herself at a critically young age. Today, thanks to our dedicated sponsors and caregivers, Rehema is an aspiring student who loves mathematics and dreams of becoming a nurse to help others in her community.
            </p>
            <Link to="/donate" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Help Save Children Like Rehema <ChevronRight size={18} />
            </Link>
          </div>
          <div className="image-wrapper hover-lift" style={{ order: 1, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
             <img src={child1} alt="Meet Rehema" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', backgroundColor: 'var(--accent)', color: 'black', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 'bold' }}>Read Her Story</div>
          </div>
        </div>
      </section>



      {/* Sponsor a Child */}
      <section className="section section--accent text-center">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--text-main)' }}>Sponsor a Child</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
            Your support can change a child’s life forever. By sponsoring a child at Faraja Orphanage, you help provide education, meals, healthcare, and a safe home. Every contribution creates an opportunity for a brighter future filled with hope and possibility.
          </p>

          <div className="grid-4 mb-6">
            {['Gladys', 'Provia', 'Baraka', 'Amina'].map((name, index) => (
              <div key={index} className="child-card hover-lift" style={{ 
                position: 'relative', 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                aspectRatio: '3/4',
                boxShadow: 'var(--shadow-md)'
              }}>
                <img src={child1} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  padding: '2rem 1rem 1rem', 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  textAlign: 'left'
                }}>
                  <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/donate" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Start Sponsoring Today
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section section--light">
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '-20px', opacity: 0.1 }}>
              <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--primary)"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              "Faraja Orphanage is more than just a home—it is a place where children are truly cared for, supported, and given the opportunity to dream again. The love and dedication shown here create a safe and joyful environment where every child feels valued and hopeful for the future."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                 <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Volunteer" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>Sarah Jenkins</div>
                <div style={{ color: 'var(--text-muted)' }}>Long-term Volunteer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Latest News</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div className="grid-2">
            {[
              {
                title: "Back-to-School Support Program",
                content: "Faraja provided school supplies and uniforms to ensure all children attend school this term.",
                icon: <BookOpen className="mb-2" size={32} color="var(--primary)" />
              },
              {
                title: "Community Outreach Initiative",
                content: "Our team supported vulnerable families in Arusha to prevent child homelessness.",
                icon: <Users className="mb-2" size={32} color="var(--primary)" />
              },
              {
                title: "Health Check-Up Campaign",
                content: "Children received medical care and nutritional support.",
                icon: <Heart className="mb-2" size={32} color="var(--primary)" />
              },
              {
                title: "Volunteer Program Launch",
                content: "New volunteers joined to support education and mentorship activities.",
                icon: <Users className="mb-2" size={32} color="var(--primary)" />
              }
            ].map((news, idx) => (
              <div key={idx} className="hover-lift" style={{ 
                padding: '2rem', 
                backgroundColor: 'var(--surface)', 
                borderRadius: 'var(--radius-lg)', 
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid #f5f5f4'
              }}>
                {news.icon}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{news.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{news.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
