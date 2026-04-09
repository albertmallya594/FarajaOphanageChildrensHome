import { Heart, ShieldCheck, Zap, MapPin, PieChart, Users } from 'lucide-react';
import React from 'react';
import heroImg from '../assets/community_support.png';
import founderImg from '../assets/team_founder.png';
import coordinatorImg from '../assets/team_coordinator.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ─── SVG Avatar Placeholder ───────────────────────────────────────────────────
const SvgAvatar = ({ initials, bgColor = '#E45D25', size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <circle cx="110" cy="110" r="110" fill={bgColor} />
    <circle cx="110" cy="88" r="38" fill="rgba(255,255,255,0.25)" />
    <ellipse cx="110" cy="185" rx="58" ry="42" fill="rgba(255,255,255,0.18)" />
    <text x="110" y="98" textAnchor="middle" dominantBaseline="middle"
      fontSize="36" fontWeight="700" fontFamily="Outfit, sans-serif" fill="white" letterSpacing="2">
      {initials}
    </text>
  </svg>
);

// ─── Role badge config ─────────────────────────────────────────────────────────
const ROLE_STYLES = {
  'Founder':               { bg: '#FFF3EC', color: '#C54C1C', border: '#FDBA8C' },
  'Coordinator':           { bg: '#EFF6FF', color: '#1E6699', border: '#93C5FD' },
  'Social Worker':         { bg: '#F0FDF4', color: '#264E2A', border: '#86EFAC' },
  'Head Matron':           { bg: '#FFF1F2', color: '#BE123C', border: '#FDA4AF' },
  'Website Administrator': { bg: '#F8FAFC', color: '#334155', border: '#CBD5E1' },
};

// ─── Single Team Card ──────────────────────────────────────────────────────────
const TeamCard = ({ name, role, desc, image, svgBg, initials, delay, isFeatured = false }) => {
  const roleStyle = ROLE_STYLES[role] || ROLE_STYLES['Coordinator'];
  const getInitials = (n) => n.split(' ').slice(0, 2).map(w => w[0]).join('');

  return (
    <div
      className="reveal hover-lift"
      style={{
        transitionDelay: delay,
        backgroundColor: 'white',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: isFeatured ? '0 20px 50px -12px rgba(228,93,37,0.3)' : 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        border: isFeatured ? '2px solid var(--primary)' : '1px solid #f0f0f0',
        position: 'relative',
      }}
    >
      {/* Featured star badge */}
      {isFeatured && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
          backgroundColor: 'var(--primary)', color: 'white',
          borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em',
          boxShadow: '0 4px 12px rgba(228,93,37,0.4)',
        }}>
          ★ FOUNDER
        </div>
      )}

      {/* Photo / Avatar area */}
      <div style={{
        height: isFeatured ? '300px' : '240px',
        backgroundColor: '#f8fafc',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {image ? (
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(145deg, ${svgBg}22 0%, ${svgBg}44 100%)` }}>
            <SvgAvatar initials={initials || getInitials(name)} bgColor={svgBg} size={isFeatured ? 200 : 160} />
          </div>
        )}
        {/* Bottom gradient overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem 1.75rem 2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Role badge */}
        <span style={{
          display: 'inline-block', alignSelf: 'flex-start',
          backgroundColor: roleStyle.bg, color: roleStyle.color,
          border: `1px solid ${roleStyle.border}`,
          borderRadius: 'var(--radius-full)', padding: '0.2rem 0.85rem',
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          {role}
        </span>

        <h3 style={{
          fontFamily: 'Outfit, sans-serif', fontSize: isFeatured ? '1.5rem' : '1.2rem',
          fontWeight: 700, color: 'var(--text-main)', margin: 0, lineHeight: 1.25,
        }}>
          {name}
        </h3>

        <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary)', borderRadius: '2px' }} />

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

// ─── Leadership Section ────────────────────────────────────────────────────────
const LeadershipSection = () => {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  const team = [
    {
      name: 'Dr. Faraja Maliaki',
      role: 'Founder',
      image: founderImg,
      svgBg: '#E45D25',
      desc: 'The visionary behind Faraja Orphanage Children\'s Home, Dr. Faraja Maliaki established the organization with the mission of providing comfort, protection, and opportunities to children in need. His leadership continues to guide the organization\'s growth and impact.',
      isFeatured: true,
    },
    {
      name: 'Ayubu Loilagwaki Kerema',
      role: 'Coordinator',
      image: coordinatorImg,
      svgBg: '#2A81C4',
      desc: 'Oversees daily operations and coordinates all programs and activities within the organization, ensuring everything runs efficiently and effectively.',
    },
    {
      name: 'Remmidius Bonajose',
      role: 'Social Worker',
      svgBg: '#316436',
      desc: 'Provides emotional, social, and community support to children, working closely with families and ensuring the wellbeing of every child under care.',
    },
    {
      name: 'Grac Ernest Makua',
      role: 'Head Matron',
      svgBg: '#BE123C',
      desc: 'Responsible for the daily care and supervision of children within the home, ensuring their health, safety, and overall wellbeing.',
    },
    {
      name: 'Moirana Samuel',
      role: 'Website Administrator',
      svgBg: '#334155',
      desc: 'Manages and maintains the organization\'s website, ensuring it remains updated, secure, and functional while supporting digital communication and outreach.',
    },
  ];

  const [featured, ...rest] = team;

  return (
    <section style={{ backgroundColor: '#FAFAF9', padding: '6rem 0' }}>
      <div className="container" ref={sectionRef}>

        {/* Section header */}
        <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            backgroundColor: '#FFF3EC', border: '1px solid #FDBA8C',
            borderRadius: 'var(--radius-full)', padding: '0.35rem 1.1rem',
            marginBottom: '1rem',
          }}>
            <Users size={16} color="var(--primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Our People
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem',
          }}>
            Leadership &amp; Management Team
          </h2>

          {/* Orange underline accent */}
          <div style={{
            width: '80px', height: '4px', borderRadius: '2px',
            background: 'linear-gradient(90deg, var(--primary), var(--sun))',
            margin: '0.75rem auto 1.5rem',
          }} />

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.75',
            maxWidth: '720px', margin: '0 auto',
          }}>
            Faraja Orphanage Children's Home is guided by a passionate and dedicated team committed to
            providing care, support, and a better future for vulnerable children. Through strong
            leadership, compassion, and professionalism, the team ensures that every child receives
            the attention, protection, and opportunities they deserve.
          </p>
        </div>

        {/* Featured Founder card — full row on its own */}
        <div style={{ marginBottom: '3rem', maxWidth: '420px', margin: '0 auto 3rem' }}>
          <TeamCard {...featured} delay="100ms" isFeatured />
        </div>

        {/* Remaining 4 members — responsive grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
        }}>
          {rest.map((member, i) => (
            <TeamCard key={member.name} {...member} delay={`${(i + 2) * 120}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── About Page ───────────────────────────────────────────────────────────────
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

      {/* Leadership & Management Team */}
      <LeadershipSection />
    </div>
  );
};

export default About;
