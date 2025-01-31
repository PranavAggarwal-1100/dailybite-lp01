import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Camera, PieChart, Brain, Watch, Utensils } from 'lucide-react';

const features = [
  {
    icon: <Camera />,
    title: "Smart Logging",
    description: "Log meals via text, voice, or photo effortlessly.",
  },
  {
    icon: <PieChart />,
    title: "Personalized Insights",
    description: "Get AI-driven nutrient analysis and trends customized for you.",
  },
  {
    icon: <Brain />,
    title: "Health Coach",
    description: "Receive real-time guidance to meet your health goals.",
  },
  {
    icon: <Watch />,
    title: "Integrated Wellness",
    description: "Sync with your smartwatch for a holistic health view.",
  },
  {
    icon: <Utensils />,
    title: "Diet Plans for You",
    description: "AI-curated plans tailored to your body and lifestyle.",
  }
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose DailyBite?</h2>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              {...feature}
              delay={index * 100}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay, isVisible }) => (
  <div
    className={`card p-8 hover:transform hover:scale-105 transition-all duration-300
      ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-primary mb-6">
      {React.cloneElement(icon, { className: 'w-8 h-8' })}
    </div>
    <h3 className="text-xl font-bold mb-4 text-neutral-800">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

export default Features;