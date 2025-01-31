import React from 'react';
import { Camera, PieChart, Utensils } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: 1,
    icon: <Camera className="w-16 h-16" />,
    title: "Log Your Meal",
    description: "Upload, speak, or snap a photo to track your food easily."
  },
  {
    number: 2,
    icon: <PieChart className="w-16 h-16" />,
    title: "Get Personalized Insights",
    description: "Receive nutrient breakdowns, daily tips, and progress trends."
  },
  {
    number: 3,
    icon: <Utensils className="w-16 h-16" />,
    title: "Transform Your Diet",
    description: "Follow AI-suggested meal plans personalized for your lifestyle."
  }
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="howitworks" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">A Smarter Way to Eat Healthy!</h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {steps.map((step, index) => (
            <StepCard 
              key={step.title}
              {...step}
              delay={index * 200}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, icon, title, description, delay, isVisible }) => (
  <div 
    className={`card p-8 hover:scale-105 transition-transform duration-300
      ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="relative mb-8">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <div className="bg-primary/10 rounded-xl p-6 transition-transform duration-300">
        <div className="text-primary">
          {icon}
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-4 text-neutral-800">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

export default HowItWorks;