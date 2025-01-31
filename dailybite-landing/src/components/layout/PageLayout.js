import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAFAF5] relative">
      {/* Static Dotted Background */}
      <div className="dotted-background"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;