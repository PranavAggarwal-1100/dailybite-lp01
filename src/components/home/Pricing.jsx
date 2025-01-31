import React from 'react';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Basic meal tracking",
      "Daily calorie counter",
      "Basic analytics",
    ],
    buttonText: "Get Started",
    variant: "basic"
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "Everything in Basic",
      "AI meal recommendations",
      "Advanced analytics",
      "Health coaching",
    ],
    buttonText: "Start Pro Trial",
    variant: "pro",
    popular: true
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    features: [
      "Everything in Pro",
      "1-on-1 nutritionist",
      "Custom meal plans",
      "Priority support",
    ],
    buttonText: "Get Premium",
    variant: "premium"
  }
];

const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose Your Health Journey</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Select the perfect plan that fits your lifestyle and health goals
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard 
              key={plan.name}
              {...plan}
              delay={index * 200}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ 
  name, 
  price, 
  period = '', 
  features, 
  buttonText, 
  variant, 
  popular,
  delay,
  isVisible 
}) => {
  const buttonStyles = {
    basic: "button-secondary",
    pro: "button-primary",
    premium: "button-secondary"
  };

  return (
    <div 
      className={`card overflow-hidden transition-all duration-300
        ${popular ? 'md:-translate-y-4 shadow-xl' : ''}
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="bg-primary px-4 py-2 text-center">
          <span className="text-white text-sm font-semibold">MOST POPULAR</span>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-neutral-800 mb-4">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-neutral-600">{period}</span>
        </div>
        
        <ul className="space-y-4 mb-8">
          {features.map(feature => (
            <li key={feature} className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3" />
              <span className="text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full ${buttonStyles[variant]}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Pricing;