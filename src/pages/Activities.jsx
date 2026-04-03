import React, { useState } from 'react';
import { BookOpen, HeartPulse, Users, X } from 'lucide-react';
import communityImg from '../assets/community_support.png';
import childrenImg from '../assets/hero_children_smiling.png';

const Activities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // We are using temporary placeholders here until you add the images.
  // The website crashed because it was trying to load files that don't exist yet!
  const galleryImages = [
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1579208575657-c59520a4b7ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    childrenImg,
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    communityImg
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
                 <img src={childrenImg} alt="Desk for Children Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                 <img src="https://images.unsplash.com/photo-1576086208153-62aeb288aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clean Water for Children" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                 <img src={communityImg} alt="Roof for Rookies Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <img src={src} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            ))}
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
          <img src={selectedImage} alt="Enlarged gallery view" style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Activities;
