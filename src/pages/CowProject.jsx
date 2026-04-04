import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  TrendingUp, 
  Utensils, 
  CheckCircle, 
  Clock, 
  ChevronRight, 
  DollarSign, 
  Milk, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  MessageCircle,
  Quote,
  Activity,
  BookOpen,
  Plus
} from 'lucide-react';

// Image paths as strings (no hardcoded imports to avoid build errors if files are missing)
const cowShelter = "/FarajaOphanageChildrensHome/src/assets/cow_shelter.jpg";
const cowGrazing = "/FarajaOphanageChildrensHome/src/assets/cow_grazing.jpg";
const cowSingle = "/FarajaOphanageChildrensHome/src/assets/cow_single.jpg";
const cowHerd = "/FarajaOphanageChildrensHome/src/assets/cow_herd.jpg";
const founderChild = "/FarajaOphanageChildrensHome/src/assets/founder_child.jpg";

// Placeholder fallback for missing images
const placeholderImage = (text) => `https://placehold.co/800x600/e45d25/ffffff?text=${text}`;

const CowProject = () => {
  // Helper to handle image errors
  const handleImageError = (e, text) => {
    e.target.src = placeholderImage(text);
  };
  return (
    <div className="cow-project-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ 
        position: 'relative', 
        height: '75vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#316436', // Fallback green background
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cowHerd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Flagship Sustainability Project
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Faraja Cow Project <span style={{ color: 'var(--accent)' }}>(2022–2031)</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', opacity: 0.9, lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Building sustainability, improving nutrition, and creating a better future for vulnerable children in Arusha.
          </p>
          <a href="#donate-cow" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Support a Cow Today <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </section>

      {/* 2. PROJECT BACKGROUND */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={20} /> OUR HISTORY
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Project Background</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Faraja Support for Needy Children and Orphans Organization (FSFNCOO) is a community-based organization dedicated to supporting orphans and vulnerable children.
              </p>
              <p className="mb-6" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
                In 2022, the organization launched the <strong>Cow Project 🐄</strong> to improve nutrition and sustainability. The project started with one donated cow and has grown to <strong>10 cows by 2026</strong>.
              </p>
              <div style={{ backgroundColor: 'var(--accent-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '6px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--accent-deep)', marginBottom: '1rem', fontSize: '1.25rem' }}>This initiative supports children through:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                    <div style={{ padding: '0.4rem', backgroundColor: 'white', borderRadius: '50%', color: 'var(--accent)' }}><CheckCircle size={18}/></div>
                    Milk for vital daily nutrition
                  </li>
                  <li className="mb-3" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                    <div style={{ padding: '0.4rem', backgroundColor: 'white', borderRadius: '50%', color: 'var(--accent)' }}><CheckCircle size={18}/></div>
                    Meat for orphanage feeding programs
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                    <div style={{ padding: '0.4rem', backgroundColor: 'white', borderRadius: '50%', color: 'var(--accent)' }}><CheckCircle size={18}/></div>
                    Daily income generation for operations
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-fade-in-delayed">
              <img 
                src={cowShelter} 
                alt="Cow Shelter" 
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }} 
                onError={(e) => handleImageError(e, 'Cow Shelter')}
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: 'var(--primary)', color: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>10+</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Healthy Cattle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRENT STATUS */}
      <section className="section section--warm text-center">
        <div className="container">
          <h2 className="section-title">Current Project Status (2026)</h2>
          <div className="grid-3 mb-6">
            <div className="card hover-lift" style={{ padding: '2.5rem' }}>
              <Users size={48} color="var(--primary)" className="mb-3" />
              <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>10</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Cows</p>
            </div>
            <div className="card hover-lift" style={{ padding: '2.5rem' }}>
              <TrendingUp size={48} color="var(--accent)" className="mb-3" />
              <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>$4,350</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Value</p>
            </div>
            <div className="card" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <h4 className="mb-4" style={{ textAlign: 'center', borderBottom: '2px solid var(--accent-light)', paddingBottom: '0.5rem' }}>Value Breakdown</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span>Small Cows</span>
                  <strong style={{ color: 'var(--accent-deep)' }}>$350</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span>Medium Cows</span>
                  <strong style={{ color: 'var(--accent-deep)' }}>$450</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span>Pregnant Cows</span>
                  <strong style={{ color: 'var(--accent-deep)' }}>$500</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. VISION, MISSION & GOAL */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={24}/> OUR VISION</h3>
                <p style={{ fontSize: '1.35rem', lineHeight: 1.6, color: 'var(--text-main)', fontWeight: 500 }}>
                  To create a self-reliant and nurturing environment where every child has access to proper nutrition, education, and a better future.
                </p>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-deep)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={24}/> OUR MISSION</h3>
                <p style={{ fontSize: '1.35rem', lineHeight: 1.6, color: 'var(--text-main)', fontWeight: 500 }}>
                  To support vulnerable children through essential needs and sustainable projects like the cow project.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem', borderRadius: '30px', textAlign: 'center', boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}><Milk size={150} /></div>
               <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem', textTransform: 'uppercase', opacity: 0.8 }}>Project Goal</h3>
               <div style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1 }}>35</div>
               <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Cattle by 2031</div>
               <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6 }}>"Feeding 200+ children daily through sustainable community-driven agriculture."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OBJECTIVES */}
      <section className="section section--accent text-center">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Strategic Objectives</h2>
          <div className="grid-5" style={{ gap: '1.5rem' }}>
            {[
              { icon: <Milk size={32}/>, title: "Provide nutrition", p: "Milk & Meat supply" },
              { icon: <DollarSign size={32}/>, title: "Daily Income", p: "Generate funds" },
              { icon: <Users size={32}/>, title: "Support Kids", p: "200+ annually" },
              { icon: <ShieldCheck size={32}/>, title: "Sustainability", p: "Long-term system" },
              { icon: <Heart size={32}/>, title: "Community", p: "Participation" }
            ].map((obj, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}>
                 <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '15px' }}>{obj.icon}</div>
                 <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{obj.title}</h4>
                 <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{obj.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="section-title">Why the Cow Project Matters</h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <div style={{ padding: '3rem 2rem', borderRadius: '20px', backgroundColor: '#fcf8f6', borderTop: '6px solid var(--accent)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--accent-light)', color: 'var(--accent-deep)', borderRadius: '50%', marginBottom: '1.5rem' }}><Milk size={32}/></div>
              <h3 style={{ color: 'var(--accent-deep)', marginBottom: '1rem' }}>Nutritional</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-main)', textAlign: 'left' }}>
                <li className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--accent)"/> Fresh milk supply</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--accent)"/> Improved child health</li>
              </ul>
            </div>
             <div style={{ padding: '3rem 2rem', borderRadius: '20px', backgroundColor: '#f6fafc', borderTop: '6px solid var(--primary)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(228, 93, 37, 0.1)', color: 'var(--primary)', borderRadius: '50%', marginBottom: '1.5rem' }}><TrendingUp size={32}/></div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Economic</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-main)', textAlign: 'left' }}>
                <li className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--primary)"/> Income from milk</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--primary)"/> Reduced dependency</li>
              </ul>
            </div>
             <div style={{ padding: '3rem 2rem', borderRadius: '20px', backgroundColor: '#f6fcf6', borderTop: '6px solid var(--blue)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(42, 129, 196, 0.1)', color: 'var(--blue)', borderRadius: '50%', marginBottom: '1.5rem' }}><Users size={32}/></div>
              <h3 style={{ color: 'var(--blue)', marginBottom: '1rem' }}>Social</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-main)', textAlign: 'left' }}>
                <li className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--blue)"/> Better conditions</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="var(--blue)"/> Community empowerment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TIMELINE */}
      <section className="section section--warm">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center">Journey Toward 2031</h2>
          <div className="timeline-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <th style={{ padding: '1.25rem', textAlign: 'left' }}>Timeline Phase</th>
                    <th style={{ padding: '1.25rem', textAlign: 'center' }}>Key Milestone</th>
                    <th style={{ padding: '1.25rem', textAlign: 'right' }}>Herd Size</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "2022", note: "Project Launch", cows: "1 Cow" },
                    { year: "2023", note: "Establishing Farm", cows: "3 Cows" },
                    { year: "2024", note: "First Calves Born", cows: "5 Cows" },
                    { year: "2025", note: "Infrastructure Expansion", cows: "8 Cows" },
                    { year: "2026", note: "Current Status", cows: "10 Cows" },
                    { year: "2027-2031", note: "Target: 35 Cows (5 cows/yr)", cows: "35 Cows", special: true }
                  ].map((item, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee', backgroundColor: item.special ? '#FFF8F1' : 'transparent' }}>
                      <td style={{ padding: '1.25rem', fontWeight: 600 }}>{item.year}</td>
                      <td style={{ padding: '1.25rem', textAlign: 'center', color: item.special ? 'var(--primary)' : 'var(--text-muted)' }}>{item.note}</td>
                      <td style={{ padding: '1.25rem', textAlign: 'right', fontWeight: 800 }}>{item.cows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BUDGET */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="section-title">Expansion Budget & Transparency</h2>
          <div className="grid-2" style={{ gap: '3rem' }}>
            <div className="card" style={{ padding: '3rem', border: '1px solid #eee' }}>
               <h4 style={{ color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>Assets Value 2026</h4>
               <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-deep)', marginBottom: '1rem' }}>$4,350</div>
               <p style={{ color: 'var(--text-muted)' }}>Total estimated value of current cattle herd.</p>
            </div>
            <div className="card" style={{ padding: '3rem', backgroundColor: 'var(--text-main)', color: 'white', border: 'none' }}>
               <h4 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', textTransform: 'uppercase' }}>Expansion Budget 2031</h4>
               <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '1rem' }}>$22,750</div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left', marginTop: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}><Plus size={14}/> Cow Purchase</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}><Plus size={14}/> Nutrition/Feed</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}><Plus size={14}/> Veterinary Care</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9 }}><Plus size={14}/> Infrastructure</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. EXPECTED OUTCOMES */}
      <section className="section bg-white text-center" style={{ paddingTop: 0 }}>
        <div className="container" style={{ borderTop: '1px solid #eee', paddingTop: '5rem' }}>
          <h2 className="section-title">Future Impact & Outcomes</h2>
          <div className="grid-4">
             <div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>200+</div>
                <p style={{ fontWeight: 600 }}>Children receiving daily milk & nutrition</p>
             </div>
             <div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-deep)' }}>100%</div>
                <p style={{ fontWeight: 600 }}>Self-sustaining operations income</p>
             </div>
             <div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--blue)' }}>35+</div>
                <p style={{ fontWeight: 600 }}>Cattle grazing sustainably by 2031</p>
             </div>
             <div>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)' }}>-40%</div>
                <p style={{ fontWeight: 600 }}>Reduction in external donor dependency</p>
             </div>
          </div>
        </div>
      </section>

      {/* 11. GALLERY */}
      <section className="section section--warm text-center">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="grid-3" style={{ gap: '1rem' }}>
            <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
              <img src={cowGrazing} alt="Cow Grazing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Grazing')} />
            </div>
             <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
              <img src={cowShelter} alt="Cows in Shelter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Shelter')} />
            </div>
             <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
              <img src={cowSingle} alt="Single Cow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Cow')} />
            </div>
             <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', overflow: 'hidden' }}>
              <img src={cowHerd} alt="Herd of Cows" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Herd')} />
            </div>
             <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', backgroundColor: '#eef', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={48} opacity={0.2} />
             </div>
             <div className="hover-lift" style={{ height: '300px', borderRadius: '20px', backgroundColor: '#efe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={48} opacity={0.2} />
             </div>
          </div>
        </div>
      </section>

      {/* 12. DONOR SPONSORSHIP */}
      <section id="donate-cow" className="section bg-white text-center">
        <div className="container">
          <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem' }}>SPONSORSHIP OPPORTUNITIES</div>
          <h2 className="section-title">Donate a Cow – Change a Child’s Life 🐄</h2>
          <p className="section-subtitle">At Faraja, one cow can transform many lives by providing food, income, and sustainability.</p>
          
          <div className="grid-3 mb-6">
            {[
              { title: "Small Cow", price: "$350", desc: "Start a legacy of health." },
              { title: "Medium Cow", price: "$450", desc: "Support growing needs." },
              { title: "Pregnant Cow", price: "$500", desc: "Sustainable growth multiplier.", popular: true }
            ].map((opt, i) => (
              <div key={i} className={`card hover-lift ${opt.popular ? 'border-primary' : ''}`} style={{ 
                padding: '3rem 2rem', 
                position: 'relative',
                border: opt.popular ? '2px solid var(--primary)' : '1px solid #f0f0f0',
                backgroundColor: opt.popular ? '#fcf9f7' : 'white'
              }}>
                {opt.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.4rem 1.25rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800 }}>MOST IMPACTful</div>}
                <h3 className="mb-2">{opt.title}</h3>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '1.5rem' }}>{opt.price}</div>
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{opt.desc}</p>
                <ul className="text-left mb-6" style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Official Donation Certificate</li>
                  <li className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Monthly Health Reports</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Personal Photos of your cow</li>
                </ul>
                <Link to="/donate" className={`btn ${opt.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>Sponsor Cow</Link>
              </div>
            ))}
          </div>

          <div className="card" style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem', border: 'none', backgroundColor: '#fcf8f6' }}>
            <h3 style={{ marginBottom: '1rem' }}>Partial Sponsorship & Care</h3>
            <p className="mb-4">Donate any amount to support animal feed, veterinary services, and shelter maintenance.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
               <Link to="/donate" className="btn btn-secondary">Support Daily Care</Link>
               <Link to="/donate" className="btn btn-primary">Partial Sponsorship</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. IMPACT SECTION */}
      <section className="section section--warm text-center">
        <div className="container">
          <h2 className="section-title">The Faraja Impact</h2>
          <div className="grid-3" style={{ gap: '3rem' }}>
             <div className="animate-fade-in">
                <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Milk size={48}/></div>
                <h3 className="mb-3">Nutrition</h3>
                <p style={{ color: 'var(--text-muted)' }}>Hundreds of orphans receive fresh, vitamin-rich milk every morning.</p>
             </div>
             <div className="animate-fade-in">
                <div style={{ marginBottom: '1rem', color: 'var(--accent-deep)' }}><DollarSign size={48}/></div>
                <h3 className="mb-3">Operations</h3>
                <p style={{ color: 'var(--text-muted)' }}>Surplus income supports electricity, water, and staff welfare at the home.</p>
             </div>
             <div className="animate-fade-in">
                <div style={{ marginBottom: '1rem', color: 'var(--blue)' }}><TrendingUp size={48}/></div>
                <h3 className="mb-3">Sustainability</h3>
                <p style={{ color: 'var(--text-muted)' }}>A growing herd ensures the home is resilient and less dependent on outside aid.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 14. CALL TO ACTION - PAYMENT */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ backgroundColor: 'var(--text-main)', color: 'white', padding: '4rem', borderRadius: '30px', boxShadow: 'var(--shadow-2xl)' }}>
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>How to Support the Project</h2>
            <div className="grid-2" style={{ gap: '3rem' }}>
               <div>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Activity /> Mobile Donation</h3>
                  <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>M-Pesa (Tanzania)</div>
                     <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>+255 763 485 866</div>
                     <p className="mt-2" style={{ opacity: 0.6 }}>Beneficiary: Faraja Needy Children</p>
                  </div>
               </div>
               <div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><ShieldCheck /> Bank Transfer</h3>
                  <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                     <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li className="mb-2"><strong>Acc:</strong> 015C892566500</li>
                        <li className="mb-2"><strong>Bank:</strong> CRDB Bank Arusha</li>
                        <li className="mb-2"><strong>SWIFT:</strong> CORUTZTZ</li>
                        <li><strong>Recipient:</strong> Faraja Needy</li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. TRANSPARENCY */}
      <section className="section bg-white text-center" style={{ paddingTop: 0 }}>
         <div className="container">
            <h2 className="section-title">Our Transparency Promise</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '300px' }}>
                   <ShieldCheck size={32} color="var(--primary)" />
                   <h4 className="mt-3">100% Fund Usage</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Every cent donated to the cow project stays with the herd and the children.</p>
                </div>
                <div style={{ maxWidth: '300px' }}>
                   <MessageCircle size={32} color="var(--accent)" />
                   <h4 className="mt-3">Direct Updates</h4>
                   <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Donors receive direct line communication on the project's health and growth.</p>
                </div>
            </div>
         </div>
      </section>

      {/* 16. FOUNDER STORY */}
      <section className="section section--warm">
         <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                <div style={{ position: 'relative' }}>
                   <img src={founderChild} alt="Founder with Children" style={{ width: '100%', borderRadius: '25px', boxShadow: 'var(--shadow-xl)' }} onError={(e) => handleImageError(e, 'Founder')} />
                </div>
                <div>
                   <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>The Visionary: Faraja Maliaki</h2>
                   <p className="mb-4" style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
                      Faraja Maliaki founded FSFNCOO after witnessing children suffer from poverty and lack of basic needs in his community. His vision was to bring hope, care, and opportunity to vulnerable children.
                   </p>
                   <p className="mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                      In 2022, he introduced the <strong>Cow Project 🐄</strong> to provide nutrition and build sustainability. What started with one cow has grown into a life-changing initiative.
                   </p>
                   <div style={{ padding: '2.5rem', backgroundColor: 'white', borderRadius: '20px', borderLeft: '8px solid var(--primary)', position: 'relative' }}>
                       <Quote size={40} style={{ position: 'absolute', top: '-15px', left: '20px', color: 'var(--primary)', opacity: 0.2 }} />
                       <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1rem' }}>
                        “I started this journey to bring hope. The cow project is not just about animals—it is about feeding children and building a better future.”
                       </p>
                       <p style={{ fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>— Faraja Maliaki, Founder</p>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 17. FINAL CALL TO ACTION */}
      <section className="section bg-white text-center">
         <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Sponsor?</h2>
            <p className="section-subtitle">Join us in our mission to reach 35 cows by 2031 and secure the nutritional future of our children.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
               <Link to="/donate" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>Sponsor a Cow Now</Link>
               <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>Contact Project Manager</Link>
            </div>
         </div>
      </section>

      <style>{`
        .cow-project-page h2.section-title {
           font-size: 2.75rem;
           font-weight: 900;
           margin-bottom: 2.5rem;
           color: var(--text-main);
        }
        .cow-project-page .section-subtitle {
           max-width: 800px;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 4rem;
           font-size: 1.25rem;
        }
        @media (max-width: 991px) {
           .grid-2, .grid-3, .grid-4, .grid-5 {
              grid-template-columns: 1fr !important;
           }
           .hero-section h1 {
              font-size: 3rem !important;
           }
        }
      `}</style>
    </div>
  );
};

export default CowProject;
