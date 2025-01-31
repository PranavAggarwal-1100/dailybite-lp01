import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] pt-20 relative bg-[#FAFAF5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6 font-montserrat">
              Fuel Your Health, One Bite at a Time!
            </h1>
            <p className="text-xl text-neutral-600 mb-8 font-opensans">
              Track. Analyze. Transform. Welcome to the smarter way to eat healthy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 rounded-full bg-[#A6E22E] text-white font-bold text-lg hover:bg-[#95CC29] transition-all duration-300">
                Get Started for Free
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-[#A6E22E] text-[#A6E22E] font-bold text-lg hover:bg-[#A6E22E] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="flex-1 z-10">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#A6E22E] mb-2">Daily Stats</h3>
                </div>
                <StatsCard
                  icon={<Activity className="w-5 h-5" />}
                  label="Calories burned"
                  value="520 kcal"
                />
                <StatsCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  label="Steps"
                  value="8,475 steps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon, label, value }) => (
  <div className="flex justify-between items-center p-4 bg-[#A6E22E]/10 rounded-lg">
    <div className="flex items-center gap-3 text-neutral-700">
      {icon}
      <span className="font-semibold">{label}</span>
    </div>
    <span className="font-bold text-[#A6E22E]">{value}</span>
  </div>
);

export default Hero;