import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

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

      {/* Heading + animated paragraph */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
