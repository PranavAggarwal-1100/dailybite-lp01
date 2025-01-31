import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAFAF5] relative">
      {/* Dotted Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dot-pattern opacity-50" />
      </div>
      
      {/* Main Content */}
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />

      <style jsx global>{`
        .dot-pattern {
          background-image: radial-gradient(#E8E8E8 2px, transparent 2px);
          background-size: 30px 30px;
          animation: floatingDots 20s linear infinite;
        }

        @keyframes floatingDots {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
