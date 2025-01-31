import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How accurate is the food tracking?",
    answer: "Our AI-powered system provides over 95% accuracy in food recognition and nutritional analysis. We continuously update our database to ensure the most accurate tracking possible."
  },
  {
    question: "Can I sync with my fitness devices?",
    answer: "Yes! DailyBite seamlessly integrates with major fitness devices and apps including Apple Watch, Fitbit, and Garmin for comprehensive health tracking."
  },
  {
    question: "Is my data secure?",
    answer: "Your privacy is our top priority. We use bank-level encryption and follow strict data protection protocols to ensure your information is always secure."
  },
  {
    question: "Can I customize my meal plans?",
    answer: "Absolutely! Our AI creates personalized meal plans based on your preferences, dietary restrictions, and health goals. You can modify these plans anytime."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-neutral-600 text-center mb-12">
        Everything you need to know about DailyBite
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Your Health Journey Starts Here!
        </h3>
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          Join thousands of happy users who have transformed their lifestyle with DailyBite's smart nutrition tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button-primary">
            Sign Up Now
          </button>
          <button className="button-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div 
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-4 text-neutral-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;