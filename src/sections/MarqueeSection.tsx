import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';

// Row 1 = first 11 clips, Row 2 = remaining clips (celestia was removed upstream).
const ROW1 = [
  'space-voyage',
  'codenest',
  'vex-ventures',
  'stellar-ai-v2',
  'asme',
  'transform-data',
  'vitara',
  'terra',
  'skyelite',
  'aethera',
  'designpro',
];

const ROW2 = [
  'stellar-ai',
  'xportfolio',
  'orbit-web3',
  'nexora',
  'evr-ventures',
  'planet-orbit',
  'new-era',
  'wealth',
  'luminex',
];

function Tile({ name }: { name: string }) {
  return (
    <video
      src={`/images/marquee/${name}.mp4`}
      className="rounded-2xl object-cover flex-shrink-0"
      style={{ width: 420, height: 270 }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Triple each row for seamless horizontal travel.
  const row1 = [...ROW1, ...ROW1, ...ROW1];
  const row2 = [...ROW2, ...ROW2, ...ROW2];

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="px-5 sm:px-8 md:px-10 text-center mb-12 sm:mb-16 md:mb-20">
        <FadeIn
          as="p"
          y={20}
          className="text-[#D7E2EA]/60 uppercase tracking-[0.3em] mb-3 sm:mb-4"
          style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)' }}
        >
          Showreel
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.1}
          y={30}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
        >
          In Motion
        </FadeIn>
        <FadeIn
          as="p"
          delay={0.2}
          className="text-[#D7E2EA] font-light mx-auto mt-4 sm:mt-6 max-w-[460px]"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
        >
          A living reel of the web and motion styles I craft.
        </FadeIn>
      </div>

      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((name, i) => (
            <Tile key={`r1-${i}`} name={name} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((name, i) => (
            <Tile key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
