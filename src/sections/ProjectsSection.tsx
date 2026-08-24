import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  img: string;
  href: string;
}

const PROJECTS: Project[] = [
  { num: '01', category: 'E-Commerce', name: 'Dana Vitan Store', img: 'dana-vitan', href: 'https://www.danavitan.com/' },
  { num: '02', category: 'Corporate', name: 'BBL', img: 'bbl', href: 'https://black-and-yellow.netlify.app/' },
  { num: '03', category: 'Corporate', name: 'At Group', img: 'atgroup', href: 'https://nik-atgroup.netlify.app/home' },
  { num: '04', category: 'Web App', name: 'Event Planner', img: 'event-planner', href: 'https://eventplannerns.netlify.app/' },
  { num: '05', category: 'Dating App', name: 'SwingMe', img: 'swingme', href: 'https://swingme.netlify.app/' },
  { num: '06', category: 'Restaurant', name: 'The Old Florence', img: 'old-florence', href: 'https://theoldflorence.netlify.app/' },
  { num: '07', category: 'Web App', name: 'CoupleCouple', img: 'couplecouple', href: 'https://couplecouple.netlify.app/login' },
  { num: '08', category: 'Business Site', name: 'Hairdresser Gloss', img: 'hairdresser-gloss', href: 'https://hairdresser-web-site.vercel.app/' },
  { num: '09', category: 'Artist Website', name: 'Courtney Barnett', img: 'courtney-barnett', href: 'https://courtney-barnett-website.netlify.app/' },
  { num: '10', category: 'Personal', name: 'CV Website N.S', img: 'cv-website', href: 'https://cv-website-for-nikol-g449.bolt.host/' },
];

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px`, background: '#0C0C0C' }}
        className={`relative w-full ${CARD_RADIUS} border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8`}
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#D7E2EA', lineHeight: 1 }}
            >
              {project.num}
            </span>
            <div>
              <p className="uppercase tracking-widest text-[#D7E2EA]/60 text-xs sm:text-sm">
                {project.category}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.4rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        {/* Live project screenshot */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className={`group block overflow-hidden ${CARD_RADIUS}`}
        >
          <img
            src={`/images/projects/${project.img}.png`}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ height: 'clamp(200px, 34vw, 470px)' }}
          />
        </a>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
