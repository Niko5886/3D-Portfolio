import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import CertificatesSection from './sections/CertificatesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import { ContactModalProvider } from './context/ContactModalContext';

export default function App() {
  return (
    <ContactModalProvider>
      <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
        <ScrollToTop />
      </main>
    </ContactModalProvider>
  );
}
