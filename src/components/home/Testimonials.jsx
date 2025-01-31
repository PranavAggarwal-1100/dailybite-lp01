import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../shared/AnimatedCounter';

const testimonials = [
  {
    name: "Alex M.",
    initials: "AM",
    feedback: "DailyBite helped me lose 10 pounds while staying energized!"
  },
  {
    name: "Sophia R.",
    initials: "SR",
    feedback: "The insights are spot-on! It's like having a personal health coach."
  },
  {
    name: "Michael T.",
    initials: "MT",
    feedback: "Meal tracking has never been this easy and effective!"
  }
];

const stats = [
  { label: "Satisfaction Rate", value: 95, suffix: "%" },
  { label: "Meals Logged", value: 10000, suffix: "+" },
  { label: "Happy Users", value: 8000, suffix: "+" }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Users Say</h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name}
              {...testimonial}
              delay={index * 200}
              isVisible={inView}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label}
              {...stat}
              delay={index * 200}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, initials, feedback, delay, isVisible }) => (
  <div 
    className={`card p-6 hover:scale-105 transition-transform duration-300
      ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-primary">{initials}</span>
      </div>
      <h3 className="text-xl font-bold text-neutral-800 mb-2">{name}</h3>
      <p className="text-neutral-600 text-center">{feedback}</p>
    </div>
  </div>
);

const StatCard = ({ label, value, suffix, delay, isVisible }) => (
  <div 
    className={`card p-6 text-center hover:scale-105 transition-transform duration-300
      ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-4xl font-bold text-primary mb-2">
      <AnimatedCounter end={value} /> {suffix}
    </div>
    <p className="text-neutral-800 font-semibold">{label}</p>
  </div>
);

export default Testimonials;