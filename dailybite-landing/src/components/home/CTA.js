import React from 'react';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="cta" className="section-padding">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 font-montserrat mb-6">
            Your Health Journey Starts Here!
          </h2>

          <p className="text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of happy users who have transformed their lifestyle with DailyBite's 
            smart nutrition tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="/signup" 
              className="button-primary w-full sm:w-auto"
            >
              Sign Up Now
            </a>

            <a 
              href="#features" 
              className="button-secondary w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;