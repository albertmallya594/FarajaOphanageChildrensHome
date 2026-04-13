import React, { useState } from 'react';
import { BookOpen, HeartPulse, Users, X } from 'lucide-react';
import communityImg from '../assets/community_support.png';
import childrenImg from '../assets/hero_children_smiling.jpg';
import dcpImg from '../assets/activities/desk-for-children-project.jpg';
import cwcImg from '../assets/activities/clean-water-for-children.jpg';
import rrpImg from '../assets/activities/roof-for-rookies-project.jpg';
import dailyLife1 from '../assets/activities/daily-life-1.jpg';
import dailyLife2 from '../assets/activities/daily-life-2.jpg';
import dailyLife3 from '../assets/activities/daily-life-3.jpg';
import dailyLife4 from '../assets/activities/daily-life-4.jpg';
import dailyLife5 from '../assets/activities/daily-life-5.jpeg';
import dailyLife6 from '../assets/activities/daily-life-6.jpg';
import dailyLife7 from '../assets/activities/daily-life-7.jpeg';
import dailyLife8 from '../assets/activities/daily-life-8.jpeg';
import dailyLife9 from '../assets/activities/daily-life-9.jpeg';
import dailyLife10 from '../assets/activities/daily-life-10.jpeg';
const Activities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Daily Life Gallery - Photos from Daily Life Gallery folder
  const galleryImages = [
    dailyLife1,
    dailyLife2,
    dailyLife3,
    dailyLife4,
    dailyLife5,
    dailyLife6,
    dailyLife7,
    dailyLife8,
    dailyLife9,
    dailyLife10
  ];

  return (
    <div className="page-activities animate-fade-in">
      {/* Header Container */}
      <section style={{
        backgroundColor: 'var(--secondary)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Our Activities</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#f0fdf4' }}>Discover how we support our children and extended community every single day.</p>
        </div>
      </section>

      {/* Core Programs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Core Programs</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div className="grid-3">
             <div className="hover-lift" style={{ border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'white' }}>
               <div style={{ height: '200px', backgroundColor: '#f5f5f4' }}>
                 <img src={dcpImg} alt="Desk for Children Project classroom support" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                   <BookOpen size={28} color="var(--primary)" />
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Desk for Children Project (DCP)</h3>
                 </div>
                 <p style={{ color: 'var(--text-muted)' }}>We ensure that 100% of the children in our care attend school by providing essential resources. We fund desks, uniforms, textbooks, and tutoring to guarantee they have the proper infrastructure to succeed.</p>
               </div>
             </div>

             <div className="hover-lift" style={{ border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'white' }}>
               <div style={{ height: '200px', backgroundColor: '#f5f5f4' }}>
                 <img src={cwcImg} alt="Clean Water for Children community well project" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                   <HeartPulse size={28} color="var(--secondary)" />
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Clean Water for Children (CWC)</h3>
                 </div>
                 <p style={{ color: 'var(--text-muted)' }}>Every single day, children face severe health risks from contaminated water. Through CWC, we build and install improved water wells and provide reliable water filters to our surrounding communities.</p>
               </div>
             </div>

             <div className="hover-lift" style={{ border: '1px solid #e5e5e5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'white' }}>
               <div style={{ height: '200px', backgroundColor: '#f5f5f4' }}>
                 <img src={rrpImg} alt="Roof for Rookies housing improvement project" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div style={{ padding: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                   <Users size={28} color="var(--accent)" style={{ stroke: 'black' }} />
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Roof for Rookies Project (2RP)</h3>
                 </div>
                 <p style={{ color: 'var(--text-muted)' }}>We extend our impact beyond the orphanage by ensuring vulnerable families and new children have a stable, dry environment. We provide construction materials and fund housing rehabilitation.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Daily Life Gallery */}
      <section className="section section--light">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Daily Life Gallery</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
            <p className="mt-4 color-muted">A glimpse into the joy and community at Faraja.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {galleryImages.map((src, idx) => (
              <div 
                key={idx} 
                className="hover-lift"
                style={{ height: '250px', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Daily life gallery image ${idx + 1} at Faraja`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles & Education */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="section-title">Educational Resources</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary)', margin: '0 auto', borderRadius: '2px' }}></div>
            <p className="mt-4" style={{ color: 'var(--text-muted)' }}>Insights into our operations and the global impact of volunteering.</p>
          </div>
          
          <div className="grid-2" style={{ gap: '2rem' }}>
            <div className="hover-lift" style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2rem', flex: 1 }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Volunteer Blog</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>How Volunteering Helps Your Mental Health</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Did you know that dedicating your time to helping vulnerable children doesn't just change their lives, it profoundly impacts yours? Studies show volunteering reduces stress, combats depression, and provides a deep sense of purpose.
                </p>
                <button className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Read Full Article</button>
              </div>
            </div>

            <div className="hover-lift" style={{ border: '1px solid #e5e7eb', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '2rem', flex: 1 }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Impact Story</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>The Power Of Giving: Overcoming Fundraising Challenges</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Operating an orphanage in Arusha comes with massive logistical and financial hurdles. Discover our transparent approach to how we overcome systemic fundraising challenges to ensure not a single child goes without a meal or education.
                </p>
                <button className="btn btn-outline" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Read Full Article</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img src={selectedImage} alt="Enlarged daily life gallery view" loading="lazy" decoding="async" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Activities;
