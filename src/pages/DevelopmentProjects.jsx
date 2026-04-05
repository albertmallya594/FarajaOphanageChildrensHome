import React, { useState } from 'react';
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
import { useScrollReveal } from '../hooks/useScrollReveal';

// Image paths
const cowShelter = "/FarajaOphanageChildrensHome/src/assets/cow_shelter.jpg";
const cowGrazing = "/FarajaOphanageChildrensHome/src/assets/cow_grazing.jpg";
const cowSingle = "/FarajaOphanageChildrensHome/src/assets/cow_single.jpg";
const cowHerd = "/FarajaOphanageChildrensHome/src/assets/cow_herd.jpg";
const founderChild = "/FarajaOphanageChildrensHome/src/assets/founder_child.jpg";

const placeholderImage = (text) => `https://placehold.co/800x600/e45d25/ffffff?text=${text}`;

const DevelopmentProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const revealRef = useScrollReveal();

  const handleImageError = (e, text) => {
    e.target.src = placeholderImage(text);
  };

  return (
    <div className="development-projects-page" ref={revealRef}>
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ 
        position: 'relative', 
        height: '75vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#316436', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cowHerd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        <div className="container reveal" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Sustainability & Growth
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Faraja Development Projects
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', opacity: 0.9, lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Building sustainable solutions that support vulnerable children and families through nutrition, income generation, and self-reliance.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects-grid" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              View Our Projects <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#gallery" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderColor: 'white', color: 'white' }}>
              Project Gallery
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section bg-white">
        <div className="container reveal">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Creating Long-Term Impact</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '2rem' }}>
              Faraja Support for Needy Children and Orphans Organization (FSFNCOO) is committed to creating sustainable solutions that support vulnerable children and families. Our development projects focus on improving nutrition, generating income, and building a self-reliant future.
            </p>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto 4rem', borderRadius: '2px' }}></div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT TYPES */}
      <section id="projects-grid" className="section--warm">
        <div className="container">
          <div className="text-center mb-6 reveal">
            <h2 className="section-title">Our Initiatives</h2>
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
              We implement diverse agricultural and community projects designed to provide long-term impact within the orphanage and the surrounding community.
            </p>
          </div>
          
          <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
            {/* Livestock Card */}
            <div className="card reveal" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="img-zoom-container" style={{ height: '300px' }}>
                <img src={cowShelter} alt="Cow Project" className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Cow Project')} />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                  <Milk size={28} />
                  <h3 style={{ margin: 0, fontSize: '1.75rem' }}>Livestock Project (Cows 🐄)</h3>
                </div>
                <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Started in 2022 with one donated cow, our herd has grown to 10 cows by 2026. This project is a cornerstone of our sustainability efforts.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--primary)"/> Fresh Milk & Meat</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--primary)"/> Income Generation</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--primary)"/> Organic Fertilizer</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--primary)"/> Sustainability</div>
                </div>
              </div>
            </div>

            {/* Poultry Card */}
            <div className="card reveal delay-200" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="img-zoom-container" style={{ height: '300px' }}>
                <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80" alt="Poultry Project" className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent)' }}>
                  <Utensils size={28} />
                  <h3 style={{ margin: 0, fontSize: '1.75rem' }}>Poultry Project (Chickens 🐔)</h3>
                </div>
                <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Our poultry initiative provides a steady supply of eggs and meat, essential for the children's protein needs and nutritional balance.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--accent)"/> Daily Fresh Eggs</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--accent)"/> Nutritional Balance</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--accent)"/> Low Maintenance</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={18} color="var(--accent)"/> Community Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section id="gallery" className="section bg-white text-center">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">Projects in Action</h2>
            <p className="section-subtitle">A glimpse into the daily operations and progress of our development initiatives.</p>
          </div>
          
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { src: cowGrazing, alt: "Cows Grazing", label: "Livestock", delay: 'delay-100' },
              { src: cowShelter, alt: "Animal Shelter", label: "Infrastructure", delay: 'delay-200' },
              { src: cowSingle, alt: "Dairy Cow", label: "Nutrition", delay: 'delay-300' },
              { src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=400&q=80", alt: "Poultry Farming", label: "Chickens", delay: 'delay-400' },
              { src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=400&q=80", alt: "Sustainability", label: "Future", delay: 'delay-500' },
              { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80", alt: "Farm Land", label: "Growth", delay: 'delay-600' }
            ].map((img, i) => (
              <div key={i} className={`hover-lift reveal ${img.delay}`} style={{ 
                height: '300px', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                position: 'relative'
              }} onClick={() => setSelectedImage(img)}>
                <div className="img-zoom-container" style={{ width: '100%', height: '100%' }}>
                   <img src={img.src} alt={img.alt} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, img.label)} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.9)', 
            zIndex: 1000, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', maxWidth: '1000px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '-40px', right: '0', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <Plus size={40} style={{ transform: 'rotate(45deg)' }} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="animate-fade-in"
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} 
              onError={(e) => handleImageError(e, selectedImage.label)}
            />
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'white' }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{selectedImage.alt}</h3>
               <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>{selectedImage.label}</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. FLAGSHIP PROJECT: THE COW PROJECT (Expanded Details) */}
      <section className="section section--warm text-center">
        <div className="container reveal">
          <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Deep Dive</div>
          <h2 className="section-title">Focus: The Faraja Cow Project</h2>
          <div className="grid-3 mb-6">
            <div className="card reveal delay-100" style={{ padding: '2.5rem' }}>
              <Users size={48} color="var(--primary)" className="mb-3" />
              <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>10</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Cows</p>
            </div>
            <div className="card reveal delay-200" style={{ padding: '2.5rem' }}>
              <TrendingUp size={48} color="var(--accent)" className="mb-3" />
              <h3 style={{ fontSize: '3rem', fontWeight: 800 }}>$4,350</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Value</p>
            </div>
            <div className="card reveal delay-300" style={{ padding: '2.5rem', textAlign: 'left' }}>
              <h4 className="mb-4" style={{ textAlign: 'center', borderBottom: '2px solid var(-- sun)', paddingBottom: '0.5rem' }}>Value Breakdown</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span>Small Cows</span>
                  <strong style={{ color: 'var(--accent)' }}>$350</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span>Medium Cows</span>
                  <strong style={{ color: 'var(--accent)' }}>$450</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                  <span>Pregnant Cows</span>
                  <strong style={{ color: 'var(--accent)' }}>$500</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC OBJECTIVES */}
      <section className="section section--accent text-center">
        <div className="container">
          <h2 className="section-title reveal" style={{ color: 'white' }}>Strategic Objectives</h2>
          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {[
              { icon: <Milk size={32}/>, title: "Nutrition", p: "Milk, Meat & Eggs", delay: 'delay-100' },
              { icon: <DollarSign size={32}/>, title: "Daily Income", p: "Generate funds", delay: 'delay-200' },
              { icon: <Users size={32}/>, title: "Support Kids", p: "200+ annually", delay: 'delay-300' },
              { icon: <ShieldCheck size={32}/>, title: "Sustainability", p: "Long-term solutions", delay: 'delay-400' }
            ].map((obj, i) => (
              <div key={i} className={`card hover-lift reveal ${obj.delay}`} style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}>
                 <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '15px' }}>{obj.icon}</div>
                 <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{obj.title}</h4>
                 <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{obj.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. JOURNEY & TIMELINE */}
      <section className="section section--warm">
        <div className="container reveal" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center">Development Roadmap (2022–2031)</h2>
          <div className="timeline-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card reveal" style={{ padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    <th style={{ padding: '1.25rem', textAlign: 'left' }}>Phase</th>
                    <th style={{ padding: '1.25rem', textAlign: 'center' }}>Milestone</th>
                    <th style={{ padding: '1.25rem', textAlign: 'right' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "2022", note: "Cow Project Launch", cows: "Active" },
                    { year: "2024", note: "Poultry Project Launch", cows: "Active" },
                    { year: "2026", note: "Infrastructure Expansion", cows: "In Progress" },
                    { year: "2028", note: "Irrigation & Crop Farming", cows: "Planned" },
                    { year: "2031", note: "Full Sustainability Target", cows: "Vision", special: true }
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

      {/* 8. DONOR SPONSORSHIP */}
      <section id="donate-projects" className="section bg-white text-center">
        <div className="container">
          <div className="reveal">
            <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem' }}>SUPPORT OUR GROWTH</div>
            <h2 className="section-title">Sponsorship Opportunities</h2>
            <p className="section-subtitle">Your support fuels these sustainable projects, providing both nutrition and economic resilience for our children.</p>
          </div>
          
          <div className="grid-3 mb-6">
            {[
              { title: "Poultry Starter", price: "$150", desc: "Supports chicken feed and medical care for the flock.", delay: 'delay-100' },
              { title: "Livestock Care", price: "$350", desc: "Covers monthly feed and vet care for our cattle herd.", delay: 'delay-200' },
              { title: "Major Asset", price: "$500+", desc: "Buy a new pregnant cow to multiply our impact.", popular: true, delay: 'delay-300' }
            ].map((opt, i) => (
              <div key={i} className={`card hover-lift reveal ${opt.delay} ${opt.popular ? 'border-primary' : ''}`} style={{ 
                padding: '3rem 2rem', 
                position: 'relative',
                border: opt.popular ? '2px solid var(--primary)' : '1px solid #f0f0f0',
                backgroundColor: opt.popular ? '#fcf9f7' : 'white'
              }}>
                {opt.popular && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.4rem 1.25rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800 }}>MOST IMPACTFUL</div>}
                <h3 className="mb-2">{opt.title}</h3>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '1.5rem' }}>{opt.price}</div>
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{opt.desc}</p>
                <div className="text-left mb-6" style={{ listStyle: 'none', padding: 0 }}>
                  <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Official Project Certificate</div>
                  <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Monthly Impact Reports</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} color="var(--primary)"/> Personal Photos of our progress</div>
                </div>
                <Link to="/donate" className={`btn ${opt.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>Sponsor Project</Link>
              </div>
            ))}
          </div>

          <div className="card reveal" style={{ maxWidth: '700px', margin: '0 auto', padding: '2.5rem', border: 'none', backgroundColor: '#fcf8f6' }}>
            <h3 style={{ marginBottom: '1rem' }}>Partial Sponsorship & General Aid</h3>
            <p className="mb-4">Donate any amount to support infrastructure, feed, and veterinary services across all projects.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
               <Link to="/donate" className="btn btn-secondary">Support General Growth</Link>
               <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRANSPARENCY & FOUNDER */}
      <section className="section section--warm">
         <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                <div className="reveal" style={{ position: 'relative' }}>
                   <div className="img-zoom-container" style={{ borderRadius: '25px' }}>
                      <img src={founderChild} alt="Founder with Children" className="img-zoom" style={{ width: '100%', borderRadius: '25px', boxShadow: 'var(--shadow-xl)' }} onError={(e) => handleImageError(e, 'Founder')} />
                   </div>
                </div>
                <div className="reveal delay-200">
                   <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Building the Vision</h2>
                   <p className="mb-4" style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
                      Faraja Maliaki founded FSFNCOO to bring hope, care, and opportunity to vulnerable children. His commitment to sustainability led to these development projects.
                   </p>
                   <p className="mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                      What started with one donated cow is now becoming a multi-faceted development hub. From poultry to cattle, each project is a step toward a self-reliant future for our children.
                   </p>
                   <div style={{ padding: '2.5rem', backgroundColor: 'white', borderRadius: '20px', borderLeft: '8px solid var(--primary)', position: 'relative' }}>
                       <Quote size={40} style={{ position: 'absolute', top: '-15px', left: '20px', color: 'var(--primary)', opacity: 0.2 }} />
                       <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1rem' }}>
                        “Our development projects are the engine of our orphanage. They ensure our children eat well, grow strong, and thrive without being solely dependent on aid.”
                       </p>
                       <p style={{ fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>— Faraja Maliaki, Founder</p>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="section bg-white text-center">
         <div className="container reveal" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>Support Development</h2>
            <p className="section-subtitle">Join us in our mission to build a self-sustaining home for vulnerable children in Arusha.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
               <Link to="/donate" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>Support a Project</Link>
               <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>Contact Us</Link>
            </div>
         </div>
      </section>

      <style>{`
        .development-projects-page h2.section-title {
           font-size: 2.75rem;
           font-weight: 900;
           margin-bottom: 2.5rem;
           color: var(--text-main);
        }
        .development-projects-page .section-subtitle {
           max-width: 800px;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 4rem;
           font-size: 1.25rem;
        }
        @media (max-width: 991px) {
           .grid-2, .grid-3, .grid-4 {
              grid-template-columns: 1fr !important;
           }
        }
      `}</style>
    </div>
  );
};

export default DevelopmentProjects;
