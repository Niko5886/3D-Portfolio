import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const BIO =
  'AI-Native Full-Stack Developer Who Pairs Solid Engineering Fundamentals With Modern, Agentic AI-Assisted Workflows To Ship Production-Ready Web Apps — Not Just Prototypes. Certified Across The Complete JavaScript Path (Fundamentals → Advanced → Applications, Incl. AJAX, DOM & SPA), React, And Responsive HTML/CSS Design, With Object-Oriented Java, Databases, And Dedicated Training In Building Full-Stack Apps With AI. I Turn Ideas Into Clean, Scalable Front-Ends And Reliable Back-Ends Fast — Fluent With Git/GitHub And AI Tools Like GitHub Copilot And Many More.';

const DETAILS: { label: string; value: string; href?: string }[] = [
  { label: 'Age', value: '38' },
  { label: 'Gender', value: 'Male' },
  { label: 'Language', value: 'German, Bulgarian, English' },
  { label: 'Profession', value: 'AI Software Developer | Full-Stack' },
  { label: 'Phone', value: '+359 897 949 326', href: 'tel:+359897949326' },
  { label: 'E-Mail', value: 'Lobido1988@Gmail.Com', href: 'mailto:Lobido1988@Gmail.Com' },
  { label: 'Country', value: 'Bulgaria' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 text-center"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative corner objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src="/images/about/moon.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src="/images/about/object.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src="/images/about/lego.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src="/images/about/group.png" alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Heading, tagline, bio and details */}
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-3xl">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>
          <FadeIn
            as="p"
            delay={0.1}
            y={20}
            className="text-[#D7E2EA] font-medium uppercase tracking-[0.25em]"
            style={{ fontSize: 'clamp(0.8rem, 1.6vw, 1.15rem)' }}
          >
            AI Developer | Full-Stack
          </FadeIn>
        </div>

        <AnimatedText
          text={BIO}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[640px]"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
        />

        <FadeIn delay={0.15} y={20} className="w-full max-w-xl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-left">
            {DETAILS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 pb-3 border-b"
                style={{ borderColor: 'rgba(215, 226, 234, 0.12)' }}
              >
                <dt className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs">
                  {item.label}
                </dt>
                <dd
                  className="text-[#D7E2EA] font-medium"
                  style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:opacity-70 transition-opacity duration-200 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-14 sm:mt-16 md:mt-20">
        <FadeIn delay={0.2} y={20}>
          <ContactButton href="mailto:Lobido1988@Gmail.Com" />
        </FadeIn>
      </div>
    </section>
  );
}
