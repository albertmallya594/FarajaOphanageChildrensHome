import React from 'react';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  CheckCircle, 
  MapPin, 
  ShieldCheck, 
  School, 
  ClipboardList, 
  Clock, 
  FileText,
  ArrowRight,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Sponsorship = () => {
  const revealRef = useScrollReveal();

  const students = [
    { name: "Amina", age: 8, status: "Needs Sponsorship", image: "https://images.unsplash.com/photo-1511949863663-92c5c0d3239a?auto=format&fit=crop&w=400&q=80" },
    { name: "Baraka", age: 10, status: "Sponsored", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
    { name: "Neema", age: 7, status: "Needs Sponsorship", image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=400&q=80" },
    { name: "Joshua", age: 9, status: "Needs Sponsorship", image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&w=400&q=80" },
    { name: "Happy", age: 11, status: "Sponsored", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
    { name: "Elias", age: 8, status: "Needs Sponsorship", image: "https://images.unsplash.com/photo-1519238263530-99bdd1102f00?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="sponsorship-page" ref={revealRef}>
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E45D25', 
        backgroundImage: 'linear-gradient(rgba(228, 93, 37, 0.9), rgba(228, 93, 37, 0.9)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container reveal">
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.5rem 1.5rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '1px' }}>
            Empower a Life Through Learning
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
            Student Sponsorship Program
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
            Investing in the education of Faraja Orphanage children, ensuring a stable future at East African Primary Schools.
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section bg-white">
        <div className="container reveal">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Education: The Key to Freedom</h2>
              <p className="mb-4" style={{ fontSize: '1.15rem' }}>
                The Faraja Sponsorship Program supports vulnerable children by providing access to quality education, school supplies, and a stable learning environment. 
              </p>
              <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                Through this program, children are enrolled and supported at <strong>EASTAFRICAN PRIMARY SCHOOLS</strong>, ensuring they receive the specialized care, guidance, and academic excellence they need to succeed in Arusha and beyond.
              </p>
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--primary)', padding: '1rem', background: 'rgba(228, 93, 37, 0.1)', borderRadius: '15px' }}><ShieldCheck size={28} /></div>
                  <div><h4 style={{ margin: 0 }}>High Quality</h4><p style={{ margin: 0, fontSize: '0.9rem' }}>Premier institution</p></div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--secondary)', padding: '1rem', background: 'rgba(42, 129, 196, 0.1)', borderRadius: '15px' }}><Heart size={28} /></div>
                  <div><h4 style={{ margin: 0 }}>Holistic Care</h4><p style={{ margin: 0, fontSize: '0.9rem' }}>Discipline & Values</p></div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="img-zoom-container" style={{ borderRadius: '25px', boxShadow: 'var(--shadow-lg)' }}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Education" className="img-zoom" style={{ width: '100%' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: 'var(--accent)', color: 'white', padding: '2rem', borderRadius: '20px', maxWidth: '200px' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 600 }}>Enrollment Goal Achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPONSORED STUDENTS */}
      <section className="section section--warm">
        <div className="container">
          <div className="text-center mb-6 reveal">
            <h2 className="section-title">Meet Our Students</h2>
            <p className="section-subtitle">A glimpse at some of the wonderful children who are either starting their journey or are currently thriving through sponsorship.</p>
          </div>
          
          <div className="grid-3 reveal delay-200">
            {students.map((student, i) => (
              <div key={i} className="card hover-lift" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className="img-zoom-container" style={{ height: '280px' }}>
                  <img src={student.image} alt={student.name} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{student.name}</h3>
                    <span style={{ 
                      padding: '0.3rem 0.8rem', 
                      borderRadius: '20px', 
                      fontSize: '0.75rem', 
                      fontWeight: 800, 
                      backgroundColor: student.status === 'Sponsored' ? 'rgba(49, 100, 54, 0.1)' : 'rgba(228, 93, 37, 0.1)',
                      color: student.status === 'Sponsored' ? 'var(--accent)' : 'var(--primary)'
                    }}>
                      {student.status.toUpperCase()}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Age: {student.age} Years Old • Primary Education Student
                  </p>
                  <Link to="/donate" className={`btn ${student.status === 'Sponsored' ? 'btn-outline' : 'btn-primary'}`} style={{ width: '100%' }}>
                    {student.status === 'Sponsored' ? 'Send a Message' : 'Sponsor ' + student.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OVERVIEW STATS */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3">
            <div className="card reveal delay-100" style={{ textAlign: 'center', padding: '3rem', border: 'none', backgroundColor: '#fcf8f6' }}>
              <Users size={48} color="var(--primary)" className="mb-3" />
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>8</h3>
              <p style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Currently Sponsored Students</p>
            </div>
            <div className="card reveal delay-200" style={{ textAlign: 'center', padding: '3rem', border: 'none', backgroundColor: '#fcf8f6' }}>
              <TrendingUp size={48} color="var(--accent)" className="mb-3" />
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>20+</h3>
              <p style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Expected Students by 2026</p>
            </div>
            <div className="card reveal delay-300" style={{ textAlign: 'center', padding: '3rem', border: 'none', backgroundColor: '#fcf8f6' }}>
              <School size={48} color="var(--secondary)" className="mb-3" />
              <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>1</h3>
              <p style={{ fontWeight: 700, color: 'var(--text-muted)' }}>Partner School (East African)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCHOOL INFORMATION SECTION */}
      <section className="section section--accent" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container reveal">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>Partner School: East African Primary Schools</h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                All sponsored students are enrolled at <strong>EASTAFRICAN PRIMARY SCHOOLS</strong>, a reputable institution committed to providing quality primary education. 
              </p>
              <p style={{ opacity: 0.9, marginBottom: '2.5rem' }}>
                The school focuses on academic excellence, discipline, and holistic child development in a supportive environment. It is widely recognized as one of Arusha's most stable and nurturing platforms for children from vulnerable backgrounds.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle size={20} /> Academic Excellence</div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle size={20} /> Moral Discipline</div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle size={20} /> Qualified Educators</div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><CheckCircle size={20} /> Nurturing Facilities</div>
              </div>
            </div>
            <div style={{ order: 1 }}>
               <img src="https://images.unsplash.com/photo-1546410531-ec3f8016f4ad?auto=format&fit=crop&w=800&q=80" alt="East African School" style={{ width: '100%', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPONSORSHIP FLOW */}
      <section className="section bg-white">
        <div className="container reveal">
          <h2 className="section-title text-center">Where Your Support Goes</h2>
          <p className="section-subtitle">Sponsorship funds are directed to support students at East African Primary Schools, ensuring no child is left behind.</p>
          
          <div className="grid-3" style={{ gap: '2rem' }}>
             {[
               { icon: <GraduationCap size={40} />, title: "School Fees", desc: "Covers the full tuition and administrative costs at East African Primary Schools." },
               { icon: <ClipboardList size={40} />, title: "Uniforms & Kits", desc: "Provides school uniforms, sports kits, and proper footwear for every term." },
               { icon: <BookOpen size={40} />, title: "Learning Materials", desc: "Includes textbooks, stationeries, and specialized classroom learning aids." }
             ].map((item, i) => (
               <div key={i} className="card text-center" style={{ padding: '3rem', border: '1px solid #f0f0f0' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', background: 'rgba(228, 93, 37, 0.05)', borderRadius: '20px' }}>{item.icon}</div>
                  <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. SCHOOL JOINING INSTRUCTIONS */}
      <section className="section section--warm">
         <div className="container reveal" style={{ maxWidth: '900px' }}>
            <div className="card" style={{ padding: '4rem', overflow: 'hidden', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8px', background: 'var(--primary)' }}></div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                  <FileText size={40} color="var(--primary)" />
                  <h2 style={{ margin: 0, fontSize: '2rem' }}>School Joining Instructions</h2>
               </div>
               
               <div style={{ display: 'grid', gap: '2.5rem' }}>
                  <div>
                     <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}><CheckCircle size={18}/> Admission Requirements</h4>
                     <p style={{ paddingLeft: '1.75rem', fontSize: '1rem', color: 'var(--text-main)', opacity: 0.8 }}>
                        Students must meet the baseline age requirements and undergo an initial assessment at the school. Priority is given to orphans and those from low-income families residing at Faraja.
                     </p>
                  </div>
                  <div>
                     <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}><CheckCircle size={18}/> Required Documentation</h4>
                     <p style={{ paddingLeft: '1.75rem', fontSize: '1rem', color: 'var(--text-main)', opacity: 0.8 }}>
                        Birth certificates, previous academic records (if any), and health clearance certificates are required for all newly joining students.
                     </p>
                  </div>
                  <div>
                     <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}><CheckCircle size={18}/> School Rules & Schedule</h4>
                     <p style={{ paddingLeft: '1.75rem', fontSize: '1rem', color: 'var(--text-main)', opacity: 0.8 }}>
                        Students are expected to maintain strict discipline. The academic year is divided into three terms, starting in January each year. School hours are from 7:30 AM to 3:30 PM.
                     </p>
                  </div>
               </div>
               
               <div style={{ marginTop: '3rem', padding: '2rem', background: '#fafafa', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                     <Clock color="var(--primary)" />
                     <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>Term Schedule 2026</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>Jan — Apr | May — Aug | Sept — Dec</p>
                     </div>
                  </div>
                  <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                    View Full PDF <ArrowRight size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="section bg-white text-center">
        <div className="container reveal" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Ready to Make a Difference?</h2>
          <p className="section-subtitle">A simple monthly or annual sponsorship can change a student's life forever. Join our community of supporters today.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
             <Link to="/donate" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                <Heart size={20} fill="white" style={{ marginRight: '0.5rem' }} /> Sponsor a Student Now
             </Link>
             <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                <MessageCircle size={20} style={{ marginRight: '0.5rem' }} /> Contact Us
             </Link>
          </div>
        </div>
      </section>

      <style>{`
        .sponsorship-page h2.section-title {
           font-size: 2.75rem;
           font-weight: 900;
           margin-bottom: 2rem;
           color: var(--text-main);
        }
        .sponsorship-page .section-subtitle {
           max-width: 800px;
           margin-left: auto;
           margin-right: auto;
           margin-bottom: 4rem;
           font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default Sponsorship;
