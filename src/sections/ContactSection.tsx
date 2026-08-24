import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 text-center flex flex-col items-center gap-8 sm:gap-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Contact
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        className="text-[#D7E2EA] font-light uppercase tracking-wide max-w-[420px]"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
      >
        Have a project in mind? Let&apos;s create something unforgettable together.
      </FadeIn>

      <FadeIn delay={0.3} y={20}>
        <ContactButton href="mailto:hello@jack3d.com" />
      </FadeIn>

      <div
        className="w-full max-w-5xl mx-auto mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest"
        style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
      >
        <span>© 2026 Nik — 3D Creator</span>
        <span>Crafted with passion</span>
      </div>
    </section>
  );
}
