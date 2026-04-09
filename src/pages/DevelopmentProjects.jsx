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
  FileText,
  Plus,
  Sprout,
  X
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
  const [selectedProject, setSelectedProject] = useState(null);
  const revealRef = useScrollReveal();

  const handleImageError = (e, text) => {
    e.target.src = placeholderImage(text);
  };

  const formatNumber = (value) => {
    if (value === null || value === undefined) return '';
    const n = typeof value === 'number' ? value : Number(value);
    if (Number.isNaN(n)) return String(value);
    return n.toLocaleString();
  };

  const DataTable = ({ title, rows, footer }) => (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden', background: 'white' }}>
      {title && (
        <div style={{ padding: '0.9rem 1rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb', fontWeight: 900 }}>
          {title}
        </div>
      )}
      <div style={{ padding: '0.75rem 1rem' }}>
        <div style={{ display: 'grid', gap: '0.6rem' }}>
          {rows.map((r, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'baseline' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{r.label}</span>
              <span style={{ fontWeight: 900, textAlign: 'right' }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>
      {footer && (
        <div style={{ padding: '0.9rem 1rem', background: '#FFF8F1', borderTop: '1px solid rgba(228,93,37,0.2)', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <span style={{ fontWeight: 900, color: 'var(--primary)' }}>{footer.label}</span>
          <span style={{ fontWeight: 900 }}>{footer.value}</span>
        </div>
      )}
    </div>
  );

  const HighlightCard = ({ title, value, note, tone = 'primary' }) => {
    const tones = {
      primary: { bg: 'rgba(228, 93, 37, 0.08)', border: 'rgba(228, 93, 37, 0.25)', color: 'var(--primary)' },
      accent: { bg: 'rgba(49, 100, 54, 0.08)', border: 'rgba(49, 100, 54, 0.25)', color: 'var(--accent)' },
      secondary: { bg: 'rgba(42, 129, 196, 0.08)', border: 'rgba(42, 129, 196, 0.25)', color: 'var(--secondary)' },
      sun: { bg: 'rgba(249, 161, 27, 0.12)', border: 'rgba(249, 161, 27, 0.35)', color: 'var(--sun)' },
    };
    const t = tones[tone] || tones.primary;
    return (
      <div style={{ background: t.bg, border: `1px solid ${t.border}`, borderRadius: '18px', padding: '1rem 1.1rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.color }}>
          {title}
        </div>
        <div style={{ fontSize: '1.4rem', fontWeight: 1000, marginTop: '0.35rem', color: 'var(--text-main)' }}>
          {value}
        </div>
        {note && (
          <div style={{ marginTop: '0.35rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {note}
          </div>
        )}
      </div>
    );
  };

  const projects = [
    {
      id: 'livestock',
      title: "Livestock Project (Cows 🐄)",
      tag: "Flagship",
      icon: <Milk size={32} />,
      color: "var(--primary)",
      image: cowShelter,
      shortDesc: "Our core sustainability initiative providing daily nutrition and financial stability since 2022.",
      fullDesc: "The Faraja Cow Project is the backbone of our self-reliance strategy. Started with a single donated cow, we have expanded to a healthy herd that serves both nutritional and economic purposes. This project teaches our children the value of agriculture and provides a consistent source of revenue and fresh dairy products.",
      objectives: ["Provide 100% of the orphanage's milk needs", "Generate surplus income for education fees", "Create organic fertilizer for our crops", "Teach animal husbandry skills"],
      benefits: ["Fresh Milk & Meat daily", "Income from surplus sales", "Improved soil health", "Sustainability training"],
      gallery: [cowGrazing, cowShelter, cowSingle, cowHerd],
      details: {
        structured: true,
        sections: [
          {
            title: 'Background (2022–2026 Growth)',
            body: [
              'The Livestock Project began in 2022 as part of Faraja’s sustainability vision—ensuring consistent nutrition for children and building long-term self-reliance.',
              'From a small start, the herd has steadily grown through community support, careful feeding practices, and improved sheltering—helping Faraja reduce food costs while creating income opportunities.',
            ],
          },
          {
            title: 'Vision & Mission',
            body: [
              'Vision: Build a stable, self-sustaining dairy and livestock program that supports children’s nutrition and education while strengthening community resilience.',
              'Mission: Provide reliable milk for daily nutrition, generate income for school fees, and train youth and caregivers in modern livestock management.',
            ],
          },
          {
            title: 'Founder Story (Faraja Maliaki)',
            body: [
              'Faraja Maliaki’s motivation for the livestock project was simple: children deserve consistent nutrition, not uncertainty. Observing how milk improves child health, strength, and learning ability, he prioritized a sustainable source of dairy.',
              'What started as a single act of support became a scalable model—where each cow added not only food, but also a pathway to income generation and long-term independence for the home.',
            ],
          },
          {
            title: 'Current Status',
            highlights: [
              { title: 'Current herd', value: '10 cows', tone: 'accent' },
              { title: 'Estimated value', value: '$4,350', tone: 'secondary' },
            ],
          },
          {
            title: 'Growth Plan (2027–2031)',
            table: {
              title: 'Timeline (Target: 35 cows)',
              rows: [
                { label: '2027', value: 'Herd consolidation + improved shelter & feeding plan' },
                { label: '2028', value: 'Increase breeding capacity and veterinary support' },
                { label: '2029', value: 'Scale milk output; strengthen manure-to-fertilizer system' },
                { label: '2030', value: 'Expand to community-linked supply/income opportunities' },
                { label: '2031', value: 'Reach target herd size and full sustainability milestone' },
              ],
            },
          },
          {
            title: 'Budget',
            highlights: [{ title: 'Total Budget', value: '$22,750', note: 'For expansion, sheltering, feeding, veterinary services, and operations.', tone: 'primary' }],
          },
          {
            title: 'Sponsorship Options (Very Important)',
            cards: [
              { title: 'Pregnant cow', value: '$500', tone: 'primary' },
              { title: 'Medium cow', value: '$450', tone: 'secondary' },
              { title: 'Small cow', value: '$350', tone: 'accent' },
            ],
            body: [
              'Partial sponsorship is available. Sponsors can support a portion of a cow’s cost or contribute toward feed, veterinary care, and shelter improvements.',
            ],
          },
          {
            title: 'Impact',
            body: [
              'Milk for children: daily nutrition supports growth, immunity, and learning outcomes.',
              'Income generation: surplus milk/livestock value can contribute to education fees and project reinvestment.',
              'Sustainability: manure supports crop farming through organic fertilizer; reduced dependency on external donations over time.',
            ],
          },
        ],
      },
    },
    {
      id: 'poultry',
      title: "Poultry Project (Chickens 🐔)",
      tag: "Nutrition",
      icon: <Utensils size={32} />,
      color: "var(--sun)",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Ensuring a steady supply of protein through eggs and meat for over 200 children in our programs.",
      fullDesc: "Launched to address immediate protein deficiencies, the poultry project is a fast-growing initiative that provides daily fresh eggs. It is a low-maintenance, high-yield project that significantly reduces our food procurement costs while ensuring our children have a balanced diet rich in essential proteins.",
      objectives: ["Harvest 150+ eggs daily", "Maintain a healthy flock of 500+ chickens", "Provide organic poultry meat weekly", "Reduce food costs by 15%"],
      benefits: ["Daily Fresh Eggs", "Balanced protein intake", "Fast growth & high yield", "Community sales potential"],
      gallery: ["https://images.unsplash.com/photo-1582559930438-e6fd428cd82d?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"],
      details: {
        structured: true,
        sections: [
          {
            title: 'Overview',
            body: [
              'The Poultry Project is designed to provide reliable protein (eggs and meat) while generating consistent income to support children’s daily needs and education.',
            ],
          },
          {
            title: 'Executive Summary',
            body: [
              'With proper housing, feeding, and health management, a poultry operation can produce daily eggs and a predictable revenue stream. This proposal outlines a practical approach starting at 100 chickens and expanding to 200 chickens for higher production and profit.',
            ],
          },
          {
            title: 'Objectives',
            bullets: [
              'Improve nutrition through consistent egg availability',
              'Generate monthly income to support core programs',
              'Create a sustainable, scalable project with measurable ROI',
            ],
          },
          {
            title: 'Location',
            body: ['Arusha, Tanzania'],
          },
          {
            title: 'Project Description',
            body: [
              'The project focuses on well-structured chicken housing, routine feeding, vaccination, and egg collection. Eggs serve both internal consumption and sales, ensuring that project revenues directly support the orphanage’s operational sustainability.',
            ],
          },
          {
            title: 'Startup Budget (100 Chickens)',
            table: {
              title: 'Startup Budget Table (100 Chickens)',
              rows: [
                { label: 'Total', value: `TZS ${formatNumber(1300000)}` },
              ],
            },
          },
          {
            title: 'Production & Income (100 Chickens)',
            highlights: [
              { title: 'Eggs/day', value: '70–80', tone: 'secondary' },
              { title: 'Trays/day', value: '2–3', tone: 'sun' },
              { title: 'Monthly income', value: 'TZS 600,000 – 750,000', tone: 'accent' },
            ],
          },
          {
            title: 'Monthly Expenses',
            highlights: [
              { title: 'Total monthly expenses', value: 'TZS 800,000', tone: 'secondary' },
            ],
          },
          {
            title: 'Profit (Important)',
            highlights: [
              { title: 'Monthly Profit', value: 'TZS 550,000', tone: 'accent' },
              { title: 'Annual Profit', value: 'TZS 6,600,000', tone: 'primary' },
            ],
          },
          {
            title: 'Expansion Plan – 200 Chickens (Important)',
            highlightBlock: {
              title: 'Expansion to 200 Chickens',
              tone: 'primary',
            },
            table: {
              title: 'Startup Budget Table (200 Chickens)',
              rows: [{ label: 'Total', value: `TZS ${formatNumber(2250000)}` }],
            },
            highlights: [
              { title: 'Eggs/day', value: '140–160', tone: 'secondary' },
              { title: 'Trays/day', value: '~5', tone: 'sun' },
              { title: 'Income/day', value: 'TZS 40,000 – 50,000', tone: 'accent' },
              { title: 'Monthly income', value: 'TZS 1,200,000 – 1,500,000', tone: 'primary' },
            ],
          },
          {
            title: 'ROI',
            highlights: [
              { title: 'Investment', value: `TZS ${formatNumber(2250000)}`, tone: 'secondary' },
              { title: 'Payback', value: '4–6 months', tone: 'accent' },
            ],
          },
          {
            title: 'Conclusion',
            body: [
              'The Poultry Project is profitable, scalable, and directly supports Faraja’s sustainability goals. By expanding to 200 chickens, Faraja increases egg output and revenue potential, enabling reinvestment into nutrition, healthcare, and education support.',
            ],
          },
        ],
      },
    },
    {
      id: 'agriculture',
      title: "Agriculture Project (Farming 🌱)",
      tag: "New Project",
      icon: <Sprout size={32} />,
      color: "var(--accent)",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Growing seasonal crops to support daily meals and promote long-term food security at Faraja.",
      fullDesc: "The Agriculture Project focuses on utilizing our fertile land to grow essential crops like maize, beans, and vegetables. This initiative not only provides fresh, organic food for our daily meals but also serves as an outdoor classroom where children learn sustainable farming techniques that they can carry into adulthood.",
      objectives: ["Achieve 40% food self-sufficiency", "Implement organic irrigation systems", "Grow a diverse range of seasonal vegetables", "Foster agricultural entrepreneurship"],
      benefits: ["Fresh Organic Produce", "Reduced market dependency", "Practical farming education", "Climate-resilient crops"],
      gallery: ["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80"],
      details: {
        structured: true,
        sections: [
          {
            title: 'Overview',
            body: [
              'The Agriculture Project aims to strengthen food security and income generation through integrated crop farming, livestock linkages, and essential infrastructure improvements at Faraja.',
            ],
          },
          {
            title: 'Executive Summary',
            body: [
              'By investing in crop production, basic livestock integration, and supporting infrastructure, Faraja can reduce food purchase costs, generate income from surplus sales, and train youth in practical agricultural skills.',
            ],
          },
          {
            title: 'Background & Justification',
            body: [
              'Rising food costs and unreliable supply chains can disrupt daily meals for vulnerable children. Local agricultural production offers stability, reduces dependence on external markets, and creates sustainable revenue opportunities.',
            ],
          },
          {
            title: 'Project Components',
            bullets: [
              'Crop Farming: maize, beans, vegetables (seasonal planning)',
              'Livestock: linkage to dairy/poultry for manure and nutrition support',
              'Infrastructure: irrigation, storage, fencing, tools, and basic farm management systems',
            ],
          },
          {
            title: 'Implementation Plan',
            table: {
              title: 'Phased Implementation (0–12 months)',
              rows: [
                { label: '0–3 months', value: 'Land preparation, seed selection, tools purchase, fencing, initial planting' },
                { label: '3–6 months', value: 'Irrigation setup, crop maintenance, pest management, first harvest planning' },
                { label: '6–12 months', value: 'Storage improvements, scaling acreage, surplus sales channels, training & routines' },
              ],
            },
          },
          {
            title: 'Budget',
            highlights: [
              { title: 'Total Budget', value: `TZS ${formatNumber(24000000)}`, note: 'Covers crop inputs, infrastructure, tools, training, and operations.', tone: 'primary' },
            ],
            table: {
              title: 'Budget Summary',
              rows: [
                { label: 'Crop inputs (seeds, fertilizer, pest control)', value: 'TZS —' },
                { label: 'Irrigation & water infrastructure', value: 'TZS —' },
                { label: 'Tools & equipment', value: 'TZS —' },
                { label: 'Storage & fencing', value: 'TZS —' },
                { label: 'Training & operations', value: 'TZS —' },
              ],
              footer: { label: 'Total', value: `TZS ${formatNumber(24000000)}` },
            },
          },
          {
            title: 'Expected Outcomes',
            bullets: [
              'Food security: consistent meals through farm-to-home supply',
              'Income generation: surplus crop sales to fund child welfare programs',
              'Skills training: practical farming skills for youth and caregivers',
              'Sustainability: manure/fertilizer systems, reduced dependency on market prices',
              'Revenue channels: egg sales, crop sales, and milk income linkages',
            ],
          },
        ],
      },
    }
  ];

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
              Explore Our Initiatives <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
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

      {/* 3. PROJECT TYPES GRID */}
      <section id="projects-grid" className="section--warm">
        <div className="container">
          <div className="text-center mb-6 reveal">
            <h2 className="section-title">Our Active Projects</h2>
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
              Discover how our diverse agricultural and community projects are designed to provide long-term impact within the orphanage and the surrounding community.
            </p>
          </div>
          
          <div className="grid-3" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`card hover-lift reveal delay-${(index + 1) * 100}`} 
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="img-zoom-container" style={{ height: '240px', position: 'relative' }}>
                  <img src={project.image} alt={project.title} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, project.title)} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: project.color, color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {project.tag}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: project.color }}>
                    {project.icon}
                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{project.title}</h3>
                  </div>
                  <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {project.shortDesc}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <span style={{ fontWeight: 700, fontSize: '0.85rem', color: project.color, textTransform: 'uppercase', letterSpacing: '1px' }}>Learn More</span>
                     <ArrowRight size={18} color={project.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DUAL GALLERY */}
      <section id="gallery" className="section bg-white text-center">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">Projects in Action</h2>
            <p className="section-subtitle">Real moments from our fields and shelters. Click an image to enlarge.</p>
          </div>
          
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { src: cowGrazing, alt: "Cows Grazing", label: "Livestock", delay: 'delay-100' },
              { src: cowShelter, alt: "Animal Shelter", label: "Infrastructure", delay: 'delay-200' },
              { src: cowSingle, alt: "Dairy Cow", label: "Dairy", delay: 'delay-300' },
              { src: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=400&q=80", alt: "Poultry Farming", label: "Chickens", delay: 'delay-400' },
              { src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80", alt: "Green Farm", label: "Agriculture", delay: 'delay-500' },
              { src: founderChild, alt: "Children Learning", label: "Education", delay: 'delay-600' }
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
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--sun)' }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay reveal-visible" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1005, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)' }} onClick={() => setSelectedProject(null)}>
           <div className="modal-content" style={{ backgroundColor: 'white', width: '100%', maxWidth: '1000px', maxHeight: '90vh', borderRadius: '30px', overflowY: 'auto', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedProject(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'white', border: 'none', color: 'var(--text-main)', cursor: 'pointer', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              >
                <X size={24} />
              </button>
              
              <div style={{ height: '350px', position: 'relative' }}>
                 <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, selectedProject.title)} />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem 2.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                       {selectedProject.icon}
                       <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>{selectedProject.title}</h2>
                    </div>
                    <span style={{ fontWeight: 600, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{selectedProject.tag} Initiative</span>
                 </div>
              </div>
              
              <div style={{ padding: '3rem 2.5rem' }}>
                 <div className="grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
                    <div>
                       <h4 style={{ color: selectedProject.color, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={20} /> Project Overview</h4>
                       <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>{selectedProject.fullDesc}</p>
                       
                       <h4 style={{ color: selectedProject.color, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={20} /> Project Benefits</h4>
                       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          {selectedProject.benefits.map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 500 }}>
                               <CheckCircle size={16} color={selectedProject.color} /> {benefit}
                            </div>
                          ))}
                       </div>

                       {selectedProject.details?.structured && (
                         <div style={{ marginTop: '2.5rem' }}>
                           <h4 style={{ color: selectedProject.color, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                             <FileText size={20} /> Detailed Proposal
                           </h4>

                           <div style={{ display: 'grid', gap: '1.25rem' }}>
                             {selectedProject.details.sections.map((sec, idx) => (
                               <div key={idx} style={{ background: '#ffffff', border: '1px solid #f0f0f0', borderRadius: '18px', padding: '1.25rem 1.25rem' }}>
                                 <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
                                   <h5 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-main)' }}>{sec.title}</h5>
                                   {sec.highlightBlock?.title && (
                                     <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.35rem 0.75rem', borderRadius: '9999px', background: 'rgba(228, 93, 37, 0.10)', color: 'var(--primary)' }}>
                                       {sec.highlightBlock.title}
                                     </span>
                                   )}
                                 </div>

                                 {sec.body && (
                                   <div style={{ marginTop: '0.75rem', display: 'grid', gap: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                     {sec.body.map((p, i) => (
                                       <p key={i} style={{ margin: 0 }}>{p}</p>
                                     ))}
                                   </div>
                                 )}

                                 {sec.bullets && (
                                   <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                     {sec.bullets.map((b, i) => (
                                       <li key={i}>{b}</li>
                                     ))}
                                   </ul>
                                 )}

                                 {sec.highlights && (
                                   <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                                     {sec.highlights.map((h, i) => (
                                       <HighlightCard key={i} {...h} />
                                     ))}
                                   </div>
                                 )}

                                 {sec.cards && (
                                   <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                                     {sec.cards.map((c, i) => (
                                       <HighlightCard key={i} {...c} />
                                     ))}
                                   </div>
                                 )}

                                 {sec.table && (
                                   <div style={{ marginTop: '1rem' }}>
                                     <DataTable title={sec.table.title} rows={sec.table.rows} footer={sec.table.footer} />
                                   </div>
                                 )}
                               </div>
                             ))}
                           </div>
                         </div>
                       )}
                    </div>
                    <div>
                       <div style={{ backgroundColor: '#fcf8f6', padding: '2rem', borderRadius: '20px', marginBottom: '2rem' }}>
                          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 800 }}>Primary Objectives</h4>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                             {selectedProject.objectives.map((obj, i) => (
                               <li key={i} style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                  <ArrowRight size={16} style={{ color: selectedProject.color, flexShrink: 0, marginTop: '2px' }} /> {obj}
                               </li>
                             ))}
                          </ul>
                       </div>
                       
                       <Link to="/donate" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                          <Heart size={20} fill="white" style={{ marginRight: '0.5rem' }} /> Support This Project
                       </Link>
                    </div>
                 </div>
                 
                 <div style={{ marginTop: '3.5rem' }}>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 800 }}>Project Gallery</h4>
                    <div className="grid-3" style={{ gap: '1rem' }}>
                       {selectedProject.gallery.map((img, i) => (
                          <div key={i} className="img-zoom-container" style={{ height: '180px', borderRadius: '15px' }}>
                             <img src={img} alt={`Gallery ${i}`} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => handleImageError(e, 'Gallery')} />
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Lightbox Modal for Gallery */}
      {selectedImage && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0,0,0,0.9)', 
            zIndex: 1010, 
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
               <span style={{ color: 'var(--sun)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedImage.label}</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. ROADMAP (Retained but simplified) */}
      <section className="section section--warm">
        <div className="container reveal" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center">Development Roadmap (2022–2031)</h2>
          <div className="card reveal" style={{ padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-md)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                  <th style={{ padding: '1.5rem', textAlign: 'left' }}>Phase</th>
                  <th style={{ padding: '1.5rem', textAlign: 'center' }}>Milestone</th>
                  <th style={{ padding: '1.5rem', textAlign: 'right' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: "2022", note: "Cow Project Launch", status: "Active", primary: true },
                  { year: "2024", note: "Poultry Project Launch", status: "Active", primary: true },
                  { year: "2026", note: "Agriculture & Infrastructure", status: "In Progress", primary: false },
                  { year: "2031", note: "Full Sustainability Goal", status: "Vision", primary: false, special: true }
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee', backgroundColor: item.special ? '#f0fdf4' : 'transparent' }}>
                    <td style={{ padding: '1.5rem', fontWeight: 700 }}>{item.year}</td>
                    <td style={{ padding: '1.5rem', textAlign: 'center', color: item.special ? 'var(--accent)' : 'var(--text-muted)' }}>{item.note}</td>
                    <td style={{ padding: '1.5rem', textAlign: 'right', fontWeight: 800, color: item.primary ? 'var(--accent)' : 'var(--sun)' }}>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section bg-white text-center">
         <div className="container reveal" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>Support Sustainable Growth</h2>
            <p className="section-subtitle">Your donation directly funds these projects, helping us build a self-reliant future for Arusha's children.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
               <Link to="/donate" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.2rem' }}><Heart size={20} fill="white" style={{ marginRight: '0.5rem' }} /> Support a Project</Link>
               <Link to="/contact" className="btn btn-secondary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.2rem' }}>Become a Partner</Link>
            </div>
         </div>
      </section>

      <style>{`
        .development-projects-page h2.section-title {
           font-size: 2.75rem;
           font-weight: 900;
           margin-bottom: 2rem;
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
           .grid-2, .grid-3 {
              grid-template-columns: 1fr !important;
           }
        }
      `}</style>
    </div>
  );
};

export default DevelopmentProjects;
