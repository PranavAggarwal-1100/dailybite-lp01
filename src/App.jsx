import React from 'react';
import Header from '../dailybite/src/components/layout/Header';
import Hero from '../dailybite/src/components/home/Hero';
import Features from '../dailybite/src/components/home/Features';
import HowItWorks from '../dailybite/src/components/home/HowItWorks';
import Testimonials from '../dailybite/src/components/home/Testimonials';
import Pricing from '../dailybite/src/components/home/Pricing';
import FAQ from '../dailybite/src/components/home/FAQ';
import CTA from '../dailybite/src/components/home/CTA';
import Footer from '../dailybite/src/components/layout/Footer';

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