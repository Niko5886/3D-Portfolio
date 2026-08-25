import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Full-Stack Web Development',
    desc: 'End-to-end web apps in the React / Next.js + TypeScript ecosystem — from architecture to deployment. Clean, scalable front-ends and reliable back-ends with REST APIs, auth and databases.',
  },
  {
    num: '02',
    name: 'AI-Native & Agentic Development',
    desc: 'Production apps built with an AI-first workflow — Claude Code, the Claude API and GitHub Copilot. Custom Model Context Protocol (MCP) connectors and AI tooling that automate and integrate your stack.',
  },
  {
    num: '03',
    name: 'Front-End & Responsive UI',
    desc: 'Modern, animated interfaces with React, Next.js, Tailwind CSS and Framer Motion — mobile-first, fast and pixel-accurate on every device.',
  },
  {
    num: '04',
    name: 'Back-End, Databases & Auth',
    desc: 'Secure back-ends with Node.js, PostgreSQL (Supabase / Neon) and Drizzle ORM. JWT authentication, Role-Based Access Control and Row-Level Security for strict data isolation.',
  },
  {
    num: '05',
    name: 'E-Commerce & CMS Websites',
    desc: 'Conversion-focused online stores and corporate sites with headless CMS , so you manage content yourself — deployed and maintained.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="font-black shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C', lineHeight: 1 }}
            >
              {service.num}
            </span>
            <div>
              <h3
                className="font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  color: '#0C0C0C',
                  opacity: 0.6,
                }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
