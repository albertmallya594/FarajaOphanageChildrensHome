import { Link } from 'react-router-dom';
import { Heart, Users, CheckCircle, Clock, ChevronRight, BookOpen, GraduationCap, Utensils, Stethoscope, Globe, Coins } from 'lucide-react';
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
        boxShadow: 'var(--shadow-md)',
        color: 'white'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.125rem' }}>
            <span style={{ opacity: 0.9 }}>M-Pesa:</span>
            <span>+255 763 485 866</span>
          </div>
          <Link to="/donate" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', backgroundColor: 'white', color: 'var(--accent)', border: 'none' }}>Donate Now</Link>
        </div>
      </div>

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

      {/* Core Pillars Section */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-6">
             <h2 className="section-title" style={{ fontSize: '1.75rem', fontWeight: 600, color: 'black', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
               By supporting an orphan you are supporting an entire community.
             </h2>
             <div style={{ width: '80px', height: '2px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div className="grid-3" style={{ gap: '1rem' }}>
            {[
              { title: 'Our mission', link: '/about', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'What we do', link: '/activities', img: 'https://images.unsplash.com/photo-1579208575657-c59520a4b7ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Where we serve', link: '/about', img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((pillar, idx) => (
              <Link key={idx} to={pillar.link} className="hover-lift" style={{ 
                position: 'relative', 
                height: '350px', 
                borderRadius: 'var(--radius-sm)', 
                overflow: 'hidden', 
                display: 'block',
                textDecoration: 'none'
              }}>
                <img 
                  src={pillar.img} 
                  alt={pillar.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '2rem'
                }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>{pillar.title}</h3>
                </div>
              </Link>
            ))}
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

      {/* Sponsorship & Faraja Projects Section */}
      <section className="section section--warm section-sponsorship-projects">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            
            {/* Part 1: Child Sponsorship */}
            <div className="sponsorship-info animate-fade-in">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                <Heart size={32} fill="var(--primary)" />
                <h2 className="section-title" style={{ margin: 0, fontSize: '2.25rem' }}>Child Sponsorship</h2>
              </div>
              <p className="mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                At Faraja Orphanage Children’s Home, child sponsorship is one of the most powerful ways to make a lasting impact. By sponsoring a child, you directly support their education, healthcare, daily meals, and emotional wellbeing. 
              </p>
              <p className="mb-6" style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Your contribution ensures that each child grows up in a safe, loving environment with access to opportunities that shape a brighter future. Sponsorship is not just support, it is a commitment to changing a life.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(228, 93, 37, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <GraduationCap size={20} />
                  </div>
                  School fees & supplies
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(228, 93, 37, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Utensils size={20} />
                  </div>
                  Nutritious meals
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(228, 93, 37, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Stethoscope size={20} />
                  </div>
                  Healthcare & medical
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(228, 93, 37, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Heart size={20} />
                  </div>
                  Safe & loving home
                </li>
              </ul>
              
              <Link to="/donate" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                Sponsor a Child Now
              </Link>
            </div>

            {/* Part 2: Faraja Projects */}
            <div className="projects-grid-wrapper">
              <div className="mb-4">
                <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Faraja Projects</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Faraja Orphanage is committed to creating long-term, sustainable change through impactful community projects.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {[
                  { 
                    icon: <BookOpen />, 
                    title: "Education Support", 
                    desc: "Provides school fees, uniforms, and learning materials to ensure every child receives quality education." 
                  },
                  { 
                    icon: <Stethoscope />, 
                    title: "Health & Nutrition", 
                    desc: "Ensures children receive regular medical check-ups, balanced meals, and proper healthcare services." 
                  },
                  { 
                    icon: <Users />, 
                    title: "Community Outreach", 
                    desc: "Supports vulnerable families through visits, counseling, and and material assistance." 
                  },
                  { 
                    icon: <Coins />, 
                    title: "Economic Empowerment", 
                    desc: "Helps families start small businesses and become financially independent through training." 
                  }
                ].map((item, i) => (
                  <div key={i} className="hover-lift" style={{ 
                    padding: '1.5rem', 
                    backgroundColor: 'white', 
                    borderRadius: 'var(--radius-md)', 
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                      {React.cloneElement(item.icon, { size: 32 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/activities" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                  Explore Our Projects <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .section-sponsorship-projects {
            border-top: 1px solid rgba(0,0,0,0.05);
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }
          @media (max-width: 768px) {
            .grid-2 { gap: 3rem !important; }
          }
        `}</style>
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
