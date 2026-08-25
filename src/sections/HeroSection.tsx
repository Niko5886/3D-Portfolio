import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import useScrollSpy from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function HeroSection() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between gap-2 px-4 sm:px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wide sm:tracking-wider text-[0.7rem] sm:text-sm md:text-base lg:text-[1.3rem]"
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeId === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`transition-opacity duration-200 ${
                isActive
                  ? 'opacity-100 underline underline-offset-8 decoration-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </FadeIn>

      {/* Hero heading */}
      <div className="relative z-0 flex flex-1 flex-col justify-center overflow-hidden px-6 md:px-10">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m nik
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/images/hero/portrait.png"
              alt="Nik, 3D creator"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
