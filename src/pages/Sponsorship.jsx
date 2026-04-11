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
  MessageCircle,
  FileDown,
  Wallet,
  Shirt,
  Bus,
  CalendarDays,
  ClipboardCheck,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { jsPDF } from 'jspdf';

// Student photos
import aminaImg from '../assets/sponsorship/amina.jpg';
import barakaImg from '../assets/sponsorship/baraka.jpg';
import neemaImg from '../assets/sponsorship/neema.jpg';
import joshuaImg from '../assets/sponsorship/joshua.jpg';
import happyImg from '../assets/sponsorship/happy.jpg';
import eliasImg from '../assets/sponsorship/elias.jpg';

const Sponsorship = () => {
  const revealRef = useScrollReveal();

  const admissionBooklet = {
    title: 'Admission & Joining Instructions Booklet',
    schoolName: 'EAST AFRICAN PRE & PRIMARY SCHOOL',
    introduction:
      "Welcome to East African Pre & Primary School. We are pleased to welcome your child into our academic community. This booklet provides all essential information to guide you through admission, school requirements, and expectations.",
    sections: [
      {
        id: 'admission-requirements',
        icon: <ClipboardCheck size={18} />,
        title: '1. Admission Requirements',
        content: (
          <>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              All new students must:
            </p>
            <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
              <li>Complete the official registration form</li>
              <li>Pay all required fees</li>
            </ul>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0, fontWeight: 800 }}>Required Documents:</p>
              <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
                <li>Birth certificate (copy)</li>
                <li>Passport-size photographs (2)</li>
                <li>Previous academic reports (for primary students)</li>
              </ul>
            </div>
          </>
        ),
        pdfLines: [
          'All new students must:',
          '- Complete the official registration form',
          '- Pay all required fees',
          '',
          'Required Documents:',
          '- Birth certificate (copy)',
          '- Passport-size photographs (2)',
          '- Previous academic reports (for primary students)',
        ],
      },
      {
        id: 'fee-structure',
        icon: <Wallet size={18} />,
        title: '2. Fee Structure',
        content: (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>a) One-Time Payments</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Registration Fee: TZS 100,000</li>
                <li>Registration Form: TZS 20,000</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>b) School Uniform Costs</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Boys Full Uniform: TZS 100,000</li>
                <li>Girls Full Uniform: TZS 120,000</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>c) Annual Costs</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Stationery (per year): TZS 175,000</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>d) School Fees (Per Year)</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Pre-Primary (Baby Class, Middle Class, Pre-Unit – Day Scholars): TZS 820,000</li>
                <li>Primary (Standard I – VII – Day Scholars): TZS 1,200,000</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800 }}>e) Transport</p>
              <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Charged monthly depending on distance.
              </p>
            </div>
          </div>
        ),
        pdfLines: [
          'a) One-Time Payments',
          '- Registration Fee: TZS 100,000',
          '- Registration Form: TZS 20,000',
          '',
          'b) School Uniform Costs',
          '- Boys Full Uniform: TZS 100,000',
          '- Girls Full Uniform: TZS 120,000',
          '',
          'c) Annual Costs',
          '- Stationery (per year): TZS 175,000',
          '',
          'd) School Fees (Per Year)',
          '- Pre-Primary (Baby Class, Middle Class, Pre-Unit – Day Scholars): TZS 820,000',
          '- Primary (Standard I – VII – Day Scholars): TZS 1,200,000',
          '',
          'e) Transport',
          '- Charged monthly depending on distance',
        ],
      },
      {
        id: 'payment-details',
        icon: <MapPin size={18} />,
        title: '3. Payment Details',
        content: (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden' }}>
              <div style={{ background: '#f8fafc', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--secondary)" />
                <p style={{ margin: 0, fontWeight: 900 }}>Bank Payment</p>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Bank Name:</span>
                    <strong>CRDB Bank</strong>
                  </p>
                  <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Account Name:</span>
                    <strong>East African Pre &amp; Primary School</strong>
                  </p>
                  <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Account Number:</span>
                    <strong>01500007JGR00</strong>
                  </p>
                  <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>SWIFT Code:</span>
                    <strong>CORUTZTZ</strong>
                  </p>
                  <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Branch:</span>
                    <strong>Tengeru, Arusha</strong>
                  </p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1rem 1.25rem', borderRadius: '14px', background: '#FFF8F1', border: '1px solid rgba(228,93,37,0.25)' }}>
              <p style={{ margin: 0, fontWeight: 900, color: 'var(--primary)' }}>Important Notes</p>
              <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Keep deposit slips as proof of payment</li>
                <li>Submit payment confirmation to the school office</li>
              </ul>
            </div>
          </div>
        ),
        pdfLines: [
          'All payments must be made via bank:',
          '- Bank Name: CRDB Bank',
          '- Account Name: East African Pre & Primary School',
          '- Account Number: 01500007JGR00',
          '- SWIFT Code: CORUTZTZ',
          '- Branch: Tengeru, Arusha',
          '',
          'Important Notes:',
          '- Keep deposit slips as proof of payment',
          '- Submit payment confirmation to the school office',
        ],
      },
      {
        id: 'uniform',
        icon: <Shirt size={18} />,
        title: '4. School Uniform',
        content: (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              All students must wear full school uniform at all times.
            </p>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>a) Pre-Primary</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Checked shirt (school color)</li>
                <li>Navy blue shorts/skirt</li>
                <li>Sweater (school color)</li>
                <li>Black shoes with white socks</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>b) Primary</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Light blue shirt</li>
                <li>Navy blue shorts (boys) / skirt (girls)</li>
                <li>School tie</li>
                <li>Sweater (school color)</li>
                <li>Black leather shoes with white socks</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>c) Sports Uniform</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>House T-shirt</li>
                <li>Tracksuit or sports shorts</li>
                <li>Sports shoes</li>
              </ul>
            </div>
          </div>
        ),
        pdfLines: [
          'All students must wear full school uniform at all times.',
          '',
          'a) Pre-Primary',
          '- Checked shirt (school color)',
          '- Navy blue shorts/skirt',
          '- Sweater (school color)',
          '- Black shoes with white socks',
          '',
          'b) Primary',
          '- Light blue shirt',
          '- Navy blue shorts (boys) / skirt (girls)',
          '- School tie',
          '- Sweater (school color)',
          '- Black leather shoes with white socks',
          '',
          'c) Sports Uniform',
          '- House T-shirt',
          '- Tracksuit or sports shorts',
          '- Sports shoes',
        ],
      },
      {
        id: 'rules',
        icon: <ShieldCheck size={18} />,
        title: '5. School Rules & Regulations',
        content: (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>General Conduct</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Respect teachers, staff, and fellow students</li>
                <li>Use polite language</li>
                <li>No bullying or fighting</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>Attendance</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Students must attend regularly and on time</li>
                <li>Absences must be reported</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>Uniform</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Full uniform required daily</li>
                <li>Students must be neat</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>Property</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Care for school property</li>
                <li>Damages will be charged</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>Academic Responsibility</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Complete assignments</li>
                <li>Participate in class</li>
              </ul>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 900 }}>Prohibited Items</p>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Weapons or sharp objects</li>
                <li>Unauthorized electronic devices</li>
                <li>Drugs or alcohol</li>
              </ul>
            </div>
          </div>
        ),
        pdfLines: [
          'General Conduct:',
          '- Respect teachers, staff, and fellow students',
          '- Use polite language',
          '- No bullying or fighting',
          '',
          'Attendance:',
          '- Students must attend regularly and on time',
          '- Absences must be reported',
          '',
          'Uniform:',
          '- Full uniform required daily',
          '- Students must be neat',
          '',
          'Property:',
          '- Care for school property',
          '- Damages will be charged',
          '',
          'Academic Responsibility:',
          '- Complete assignments',
          '- Participate in class',
          '',
          'Prohibited Items:',
          '- Weapons or sharp objects',
          '- Unauthorized electronic devices',
          '- Drugs or alcohol',
        ],
      },
      {
        id: 'calendar',
        icon: <CalendarDays size={18} />,
        title: '6. School Calendar (Sample)',
        content: (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid #e5e7eb', background: 'white' }}>
                <p style={{ margin: 0, fontWeight: 900, color: 'var(--text-main)' }}>Term I</p>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Opening: January • Midterm: February • Closing: April</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid #e5e7eb', background: 'white' }}>
                <p style={{ margin: 0, fontWeight: 900, color: 'var(--text-main)' }}>Term II</p>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Opening: May • Midterm: June • Closing: July</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid #e5e7eb', background: 'white' }}>
                <p style={{ margin: 0, fontWeight: 900, color: 'var(--text-main)' }}>Term III</p>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Opening: September • Midterm: October • Closing: November</p>
              </div>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              Note: Exact dates will be communicated annually.
            </p>
          </div>
        ),
        pdfLines: [
          'Term I: Opening: January | Midterm: February | Closing: April',
          'Term II: Opening: May | Midterm: June | Closing: July',
          'Term III: Opening: September | Midterm: October | Closing: November',
          '',
          'Note: Exact dates will be communicated annually.',
        ],
      },
      {
        id: 'daily-schedule',
        icon: <Clock size={18} />,
        title: '7. Daily Schedule',
        content: (
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              ['Arrival', '7:30 AM'],
              ['Classes Begin', '8:00 AM'],
              ['Break', '10:30 AM'],
              ['Lunch', '1:00 PM'],
              ['Dismissal', '3:30 PM'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.9rem 1rem', borderRadius: '14px', border: '1px solid #e5e7eb', background: 'white' }}>
                <span style={{ fontWeight: 800 }}>{label}</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
        ),
        pdfLines: [
          'Arrival: 7:30 AM',
          'Classes Begin: 8:00 AM',
          'Break: 10:30 AM',
          'Lunch: 1:00 PM',
          'Dismissal: 3:30 PM',
        ],
      },
      {
        id: 'transport',
        icon: <Bus size={18} />,
        title: '8. Transport Services',
        content: (
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Transport services are available for selected routes.
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              <li>Monthly charges depend on distance</li>
              <li>Confirm routes with the school office</li>
            </ul>
          </div>
        ),
        pdfLines: [
          'Transport services:',
          '- Available for selected routes',
          '- Monthly charges depend on distance',
          '- Confirm routes with school office',
        ],
      },
      {
        id: 'parent-communication',
        icon: <Users size={18} />,
        title: '9. Parent Communication',
        content: (
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Parents are encouraged to:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              <li>Attend meetings and school events</li>
              <li>Monitor academic progress</li>
              <li>Communicate with teachers</li>
            </ul>
          </div>
        ),
        pdfLines: [
          'Parents are encouraged to:',
          '- Attend meetings and school events',
          '- Monitor academic progress',
          '- Communicate with teachers',
        ],
      },
      {
        id: 'reporting-day',
        icon: <FileText size={18} />,
        title: '10. Reporting Day Requirements',
        content: (
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Students must report with:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8 }}>
              <li>Full school uniform</li>
              <li>Required materials</li>
              <li>Proof of payment</li>
            </ul>
          </div>
        ),
        pdfLines: [
          'Students must report with:',
          '- Full school uniform',
          '- Required materials',
          '- Proof of payment',
        ],
      },
    ],
    conclusion:
      "We look forward to nurturing your child academically, socially, and morally. Thank you for choosing East African Pre & Primary School.",
  };

  const downloadAdmissionPdf = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 48;
    const maxWidth = pageWidth - margin * 2;

    const addWrappedLines = (text, fontSize = 11, isBold = false) => {
      doc.setFont('helvetica', isBold ? 'bold' : 'normal');
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line) => {
        if (cursorY + lineHeight > pageHeight - margin) {
          doc.addPage();
          cursorY = margin;
        }
        doc.text(line, margin, cursorY);
        cursorY += lineHeight;
      });
    };

    let cursorY = margin;
    const lineHeight = 16;

    // Title
    doc.setTextColor(26, 32, 44);
    addWrappedLines(admissionBooklet.title, 18, true);
    cursorY += 6;
    doc.setTextColor(46, 129, 196);
    addWrappedLines(admissionBooklet.schoolName, 12, true);
    cursorY += 10;
    doc.setTextColor(26, 32, 44);

    // Intro
    addWrappedLines('Introduction', 13, true);
    cursorY += 4;
    addWrappedLines(admissionBooklet.introduction, 11, false);
    cursorY += 10;

    // Sections
    admissionBooklet.sections.forEach((section) => {
      addWrappedLines(section.title, 13, true);
      cursorY += 4;
      section.pdfLines.forEach((line) => {
        addWrappedLines(line, 11, false);
      });
      cursorY += 10;
    });

    // Conclusion
    addWrappedLines('Conclusion', 13, true);
    cursorY += 4;
    addWrappedLines(admissionBooklet.conclusion, 11, false);

    doc.save('East-African-Pre-and-Primary-School-Admission-Joining-Instructions.pdf');
  };

  const students = [
    { name: "Amina", age: 8, status: "Needs Sponsorship", image: aminaImg },
    { name: "Baraka", age: 10, status: "Sponsored", image: barakaImg },
    { name: "Neema", age: 7, status: "Needs Sponsorship", image: neemaImg },
    { name: "Joshua", age: 9, status: "Needs Sponsorship", image: joshuaImg },
    { name: "Happy", age: 11, status: "Sponsored", image: happyImg },
    { name: "Elias", age: 8, status: "Needs Sponsorship", image: eliasImg }
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
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Education support for sponsored children" loading="lazy" decoding="async" className="img-zoom" style={{ width: '100%' }} />
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
                  <img src={student.image} alt={`${student.name} - student in sponsorship program`} loading="lazy" decoding="async" className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
               <img src="https://images.unsplash.com/photo-1546410531-ec3f8016f4ad?auto=format&fit=crop&w=800&q=80" alt="East African Primary School partner campus" loading="lazy" decoding="async" style={{ width: '100%', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADMISSION & JOINING INSTRUCTIONS BOOKLET */}
      <section className="section section--warm">
        <div className="container reveal" style={{ maxWidth: '1000px' }}>
          <div className="card" style={{ padding: '3rem', border: '1px solid #f0f0f0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ maxWidth: '720px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#EFF6FF', border: '1px solid #93C5FD', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '1rem' }}>
                  <School size={16} color="var(--secondary)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Parents &amp; Sponsors Guide
                  </span>
                </div>

                <h2 style={{ margin: 0, fontSize: '2.25rem', fontWeight: 900 }}>
                  {admissionBooklet.title}
                </h2>
                <p style={{ margin: '0.75rem 0 0', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.03em' }}>
                  {admissionBooklet.schoolName}
                </p>
                <p style={{ margin: '1.25rem 0 0', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {admissionBooklet.introduction}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={downloadAdmissionPdf}
                  className="btn btn-primary hover-lift"
                  style={{ padding: '0.85rem 1.25rem' }}
                >
                  <FileDown size={18} />
                  Download PDF
                </button>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div className="booklet-accordion" style={{ display: 'grid', gap: '0.75rem' }}>
                {admissionBooklet.sections.map((section) => (
                  <details
                    key={section.id}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '14px',
                      backgroundColor: 'white',
                      overflow: 'hidden',
                    }}
                  >
                    <summary
                      style={{
                        listStyle: 'none',
                        padding: '0.95rem 1.1rem',
                        cursor: 'pointer',
                        display: 'grid',
                        gridTemplateColumns: '40px 1fr 40px',
                        alignItems: 'center',
                        gap: '0.9rem',
                        fontWeight: 900,
                      }}
                    >
                      <span
                        style={{
                          width: '36px',
                          height: '36px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '12px',
                          background: '#FFF8F1',
                          color: 'var(--primary)',
                        }}
                      >
                        {section.icon}
                      </span>
                      <span style={{ lineHeight: 1.25 }}>
                        {section.title}
                      </span>
                      <span
                        className="booklet-chevron"
                        style={{
                          width: '36px',
                          height: '36px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '9999px',
                          background: 'rgba(228, 93, 37, 0.08)',
                          color: 'var(--primary)',
                          justifySelf: 'end',
                        }}
                      >
                        <ChevronDown size={18} />
                      </span>
                    </summary>

                    <div style={{ padding: '0 1.1rem 1.1rem', color: 'var(--text-main)' }}>
                      <div style={{ height: '1px', background: '#f1f5f9', marginBottom: '0.9rem' }} />
                      {section.content}
                    </div>
                  </details>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', borderRadius: '16px', background: '#f0fdf4', border: '1px solid rgba(49,100,54,0.25)' }}>
                <p style={{ margin: 0, fontWeight: 900, color: 'var(--accent)' }}>Conclusion</p>
                <p style={{ margin: '0.75rem 0 0', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  {admissionBooklet.conclusion}
                </p>
              </div>
            </div>
          </div>

          <style>{`
            .sponsorship-page details > summary::-webkit-details-marker {
              display: none;
            }
            .sponsorship-page .booklet-accordion details {
              transition: box-shadow 0.2s ease, transform 0.2s ease;
            }
            .sponsorship-page .booklet-accordion details:hover {
              box-shadow: 0 10px 30px -18px rgba(0,0,0,0.18);
              transform: translateY(-2px);
            }
            .sponsorship-page .booklet-accordion summary:focus-visible {
              outline: 3px solid rgba(228, 93, 37, 0.35);
              outline-offset: 3px;
              border-radius: 12px;
            }
            .sponsorship-page .booklet-accordion details[open] .booklet-chevron {
              transform: rotate(180deg);
            }
            .sponsorship-page .booklet-chevron {
              transition: transform 0.2s ease;
            }
          `}</style>
        </div>
      </section>

      {/* 7. SPONSORSHIP FLOW */}
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
