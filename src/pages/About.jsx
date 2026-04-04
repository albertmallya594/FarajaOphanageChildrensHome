import { Heart, ShieldCheck, Zap, MapPin, PieChart } from 'lucide-react';
import React from 'react';
import heroImg from '../assets/community_support.png';

const About = () => {
  return (
    <div className="page-about animate-fade-in">
      {/* Header Container */}
      <section style={{
        backgroundColor: 'var(--text-main)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#d6d3d1' }}>Learn about our mission, vision, and the heartfelt story behind Faraja Orphanage.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container grid-2">
          <div className="content-wrapper">
            <h2 className="section-title">Our Story</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              The word <strong>Faraja</strong> is Swahili for <strong>"Comfort"</strong>. True to our name, Faraja Orphanage Children's Home was founded to provide exactly that: a place of comfort, safety, and unwavering support for vulnerable children in Arusha.
            </p>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              From humble beginnings, we realized that basic provisions were not enough. We needed to provide education, healthcare, and most importantly, a loving environment where children could heal and thrive.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              Today, Faraja is a beacon of hope for the entire community, proving that with compassion and dedication, every child can have a brighter future.
            </p>
          </div>
          <div className="image-wrapper" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={heroImg} alt="Our Story at Faraja" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section--light section--accent">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title text-main">Mission & Core Values</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--text-main)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '3rem', 
            borderRadius: 'var(--radius-lg)', 
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '4rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary-hover)' }}>Our Mission</h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
              "To transform the lives of vulnerable children through education, healthcare, and a loving community, while empowering families to create sustainable futures."
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                title: 'Integrity',
                desc: 'We operate with utter transparency and accountability, ensuring that every donation goes directly towards making a sustainable impact.',
                icon: <ShieldCheck size={48} color="var(--primary)" />
              },
              {
                title: 'Compassion',
                desc: 'Love is at the core of everything we do. We strive to provide comfort (Faraja) and a genuine family environment for those we serve.',
                icon: <Heart size={48} color="var(--primary)" />
              },
              {
                title: 'Empowerment',
                desc: 'We do not just provide handouts. We empower communities, children, and caregivers through education and sustainable business setups.',
                icon: <Zap size={48} color="var(--primary)" />
              }
            ].map((val, idx) => (
              <div key={idx} className="hover-lift" style={{ 
                backgroundColor: 'white', 
                padding: '2.5rem 2rem', 
                borderRadius: 'var(--radius-lg)', 
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'inline-flex', marginBottom: '1.5rem', backgroundColor: 'var(--accent)', padding: '1rem', borderRadius: '50%' }}>
                  {val.icon}
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{val.title}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Serve (Service Area) */}
      <section className="section" style={{ backgroundColor: '#f0fdf4' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title">Our Service Area</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <p className="mb-4" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              While our core orphanage facility is nestled safely in Arusha, Tanzania, our community impact and outreach programs stretch much further. We believe that true, lasting change must happen simultaneously in the surrounding villages and districts.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Arusha City Center (Primary Orphanage & Safe House)', 'Meru District (Local Schools & Desk Projects)', 'Monduli District (Clean Water Initiatives)', 'Karatu (Vulnerable Family Support)'].map((location, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-main)' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                    <MapPin size={24} color="var(--secondary)" />
                  </div>
                  {location}
                </li>
              ))}
            </ul>
          </div>
          <div className="image-wrapper" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', height: '100%', minHeight: '300px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>[Interactive Regional Map Placeholder]</p>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="section section--light">
        <div className="container text-center">
          <h2 className="section-title">Financial Information</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto 1.5rem', borderRadius: '2px' }}></div>
          <p className="mb-6" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We take our responsibility to our donors and children incredibly seriously. Our financial model is structured to ensure that the vast majority of every dollar raised goes directly to life-saving and life-changing programs.
          </p>

          <div className="grid-3" style={{ gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="hover-lift" style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)' }}>
              <PieChart size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>85%</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Direct Programs</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Funding the Clean Water Initiative, Desk Project, child housing, food, and daily care.</p>
            </div>
            <div className="hover-lift" style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)' }}>
              <PieChart size={48} color="var(--secondary)" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>10%</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Facilities & Admin</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Essential operations, staff training, legal compliance, and vital infrastructure maintenance.</p>
            </div>
            <div className="hover-lift" style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)' }}>
              <PieChart size={48} color="var(--accent)" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>5%</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Fundraising</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Outreach activities, software subscriptions, and necessary donor engagement tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Our Leadership</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
            <p className="section-subtitle mt-4">Meet the dedicated individuals driving the vision of Faraja.</p>
          </div>

          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { role: 'Founder & Director', name: 'Michael Ochieng' },
              { role: 'Head of Operations', name: 'Sarah Nakato' },
              { role: 'Community Liaison', name: 'John Kimani' }
            ].map((person, idx) => (
              <div key={idx} className="text-center hover-lift" style={{ padding: '1.5rem' }}>
                <div style={{ 
                  width: '150px', 
                  height: '150px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e5e7eb', 
                  margin: '0 auto 1.5rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <img src={`https://i.pravatar.cc/300?img=${idx + 11}`} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{person.name}</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 500 }}>{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
