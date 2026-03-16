import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { MiniFAQ } from './components/MiniFAQ';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { ContentProtection } from './components/ContentProtection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <HelmetProvider>
      <SEO />
      <ContentProtection />
      <div className="min-h-screen bg-slate-950">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyWorkWithMe />
        <Contact />
        <MiniFAQ />
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}