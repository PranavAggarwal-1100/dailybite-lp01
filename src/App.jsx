import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';
import Pricing from './components/home/Pricing';
import FAQ from './components/home/FAQ';
import CTA from './components/home/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Single page background */}
      <div className="page-background" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;