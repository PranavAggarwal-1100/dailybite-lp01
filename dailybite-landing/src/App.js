import React from 'react';
import PageLayout from './components/layout/PageLayout';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';
import Pricing from './components/home/Pricing';
import FAQ from './components/home/FAQ';
import CTA from './components/home/CTA';
import './styles/globals.css';

function App() {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <CTA />
    </PageLayout>
  );
}

export default App;