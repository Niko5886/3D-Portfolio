import { useEffect, useRef, useState } from 'react';

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
