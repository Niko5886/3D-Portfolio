import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Cert {
  id: string;
  title: string;
  issuer: 'SoftUni' | 'Germany';
  asset: string;
  score?: string;
  span?: 'featured' | 'wide';
}

const CERTS: Cert[] = [
  { id: 'software-tech-ai', title: 'Software Technologies with AI', issuer: 'SoftUni', score: '6.00 / 6.00', asset: '/certificates/software-tech-ai.png', span: 'featured' },
  { id: 'fullstack-ai', title: 'Full-Stack Apps with AI', issuer: 'SoftUni', asset: '/certificates/fullstack-ai.png', span: 'wide' },
  { id: 'introduction-ai', title: 'Introduction to Programming with AI', issuer: 'SoftUni', asset: '/certificates/introduction-ai.pdf' },
  { id: 'vibecoding', title: 'VibeCoding', issuer: 'SoftUni', asset: '/certificates/vibecoding.pdf' },
  { id: 'js-applications', title: 'JS Applications', issuer: 'SoftUni', asset: '/certificates/js-applications.pdf' },
  { id: 'js-advanced', title: 'JS Advanced', issuer: 'SoftUni', asset: '/certificates/js-advanced.pdf' },
  { id: 'js-fundamentals', title: 'JavaScript Fundamentals', issuer: 'SoftUni', asset: '/certificates/js-fundamentals.pdf' },
  { id: 'programming-basics', title: 'Programming Basics', issuer: 'SoftUni', asset: '/certificates/programming-basics.pdf' },
  { id: 'react', title: 'React JavaScript Library', issuer: 'Germany', asset: '/certificates/react.pdf' },
  { id: 'javascript-developer', title: 'JavaScript Developer — AJAX, DOM, SPA', issuer: 'Germany', asset: '/certificates/javascript-developer.pdf' },
  { id: 'java', title: 'Java Developer — OOP, GUI, Databases', issuer: 'Germany', asset: '/certificates/java.pdf' },
  { id: 'python', title: 'Programming with Python', issuer: 'Germany', asset: '/certificates/python.pdf' },
  { id: 'frontend-developer', title: 'Frontend Developer & Web Design', issuer: 'Germany', asset: '/certificates/frontend-developer.pdf' },
  { id: 'web-design', title: 'Web Design — HTML, CSS & Dreamweaver', issuer: 'Germany', asset: '/certificates/web-design.pdf' },
];

function CertTile({ cert, onOpen }: { cert: Cert; onOpen: (c: Cert) => void }) {
  const featured = cert.span === 'featured';
  const spanClass =
    cert.span === 'featured'
      ? 'col-span-2 row-span-2'
      : cert.span === 'wide'
        ? 'col-span-2'
        : '';

  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[22px] p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-1 ${spanClass}`}
      style={{
        background: featured
          ? 'linear-gradient(155deg, rgba(118,33,176,0.22), rgba(190,76,0,0.10) 70%, rgba(12,12,12,0.6))'
          : 'rgba(215, 226, 234, 0.04)',
        border: featured
          ? '1px solid rgba(215, 226, 234, 0.28)'
          : '1px solid rgba(215, 226, 234, 0.1)',
        boxShadow: featured ? '0 12px 40px rgba(118,33,176,0.28)' : 'none',
      }}
    >
      {/* hover glow ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(182,0,168,0.55), 0 10px 40px rgba(118,33,176,0.25)' }}
      />

      <div className="flex items-center justify-between">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/45">
          {cert.issuer === 'SoftUni' ? 'SoftUni' : 'Germany'}
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/40 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
      </div>

      <div className="mt-auto">
        {featured && (
          <span
            className="hero-heading block font-black leading-none mb-2"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}
          >
            {cert.score}
          </span>
        )}
        <h3
          className={`font-medium uppercase text-[#D7E2EA] leading-tight ${featured ? '' : 'tracking-tight'}`}
          style={{ fontSize: featured ? 'clamp(0.95rem, 1.6vw, 1.25rem)' : 'clamp(0.75rem, 1.3vw, 0.95rem)' }}
        >
          {cert.title}
        </h3>
      </div>
    </button>
  );
}

function CertLightbox({ cert, onClose }: { cert: Cert | null; onClose: () => void }) {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            background: 'rgba(5, 5, 7, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-[24px] p-4 sm:p-5"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(160deg, rgba(24,20,30,0.96), rgba(12,12,12,0.96))',
              border: '1px solid rgba(215, 226, 234, 0.14)',
              boxShadow: '0 30px 80px rgba(118,33,176,0.28)',
            }}
          >
            <div className="flex items-center justify-between gap-4 mb-3 px-1">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/45">
                  {cert.issuer === 'SoftUni' ? 'SoftUni · Bulgaria' : 'Certified · Germany'}
                </p>
                <h3 className="text-[#D7E2EA] font-medium uppercase truncate text-sm sm:text-base">
                  {cert.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={cert.asset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white transition-transform duration-200 hover:scale-105"
                  style={{ background: 'linear-gradient(123deg, #B600A8, #7621B0)' }}
                >
                  Open <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <iframe
              src={cert.asset}
              title={cert.title}
              className="w-full rounded-2xl bg-white"
              style={{ height: '70vh' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CertificatesSection() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section
      id="certifications"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: '#0C0C0C' }}
    >
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <FadeIn
          as="p"
          y={20}
          className="text-[#D7E2EA]/60 uppercase tracking-[0.3em] mb-3 sm:mb-4"
          style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)' }}
        >
          14 Credentials
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.1}
          y={30}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
        >
          Certifications
        </FadeIn>
      </div>

      <FadeIn y={30} className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[128px] sm:auto-rows-[150px] lg:auto-rows-[160px]">
          {CERTS.map((cert) => (
            <CertTile key={cert.id} cert={cert} onOpen={setActive} />
          ))}
        </div>
      </FadeIn>

      <CertLightbox cert={active} onClose={() => setActive(null)} />
    </section>
  );
}
