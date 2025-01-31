import React from 'react';
import { Activity, TrendingUp, ArrowRight, Sparkles, Heart, Apple, Target, Moon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative pt-28 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Accent Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">AI-Powered Health Tracking</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-800 mb-6 font-montserrat leading-tight">
              Fuel Your Health,{" "}
              <span className="text-primary">One Bite</span> at a Time!
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 font-opensans max-w-2xl">
              Track. Analyze. Transform. Welcome to the smarter way to eat healthy with 
              AI-powered insights and personalized recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="button-primary group flex items-center gap-2 min-w-[200px] justify-center animate-pulse">
                Coming Soon
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="button-secondary min-w-[200px]">
                Watch Demo
              </button> */}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-neutral-100 
                          transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Daily Health Dashboard</h3>
                  <p className="text-neutral-600 text-sm">Your comprehensive health metrics at a glance</p>
                </div>

                <StatsCard
                  icon={<Activity className="w-5 h-5" />}
                  label="Calories burned"
                  value="520 kcal"
                  trend="+12% vs yesterday"
                  isPositive={true}
                />
                <StatsCard
                  icon={<Heart className="w-5 h-5" />}
                  label="Heart Rate"
                  value="72 bpm"
                  trend="Optimal range"
                  isPositive={true}
                />
                <StatsCard
                  icon={<Apple className="w-5 h-5" />}
                  label="Nutrition Score"
                  value="8.5/10"
                  trend="+2.1 points this week"
                  isPositive={true}
                />
                <StatsCard
                  icon={<Target className="w-5 h-5" />}
                  label="Daily Goals"
                  value="4/5"
                  trend="80% completed"
                  isPositive={true}
                />
                <StatsCard
                  icon={<Moon className="w-5 h-5" />}
                  label="Sleep Quality"
                  value="7.8 hrs"
                  trend="Deep sleep: 65%"
                  isPositive={true}
                />

                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <div className="bg-primary/5 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-neutral-600">Daily Progress</span>
                      <span className="text-sm font-bold text-primary">78%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary rounded-full h-2 transition-all duration-500"
                           style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <button className="w-full py-3 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2">
                    View Detailed Report
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon, label, value, trend, isPositive }) => (
  <div className="flex flex-col gap-2 p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3 text-neutral-700">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>
      <span className="font-bold text-primary text-xl">{value}</span>
    </div>
    <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-500'} ml-8 flex items-center gap-1`}>
      {trend}
    </div>
  </div>
);

export default Hero;