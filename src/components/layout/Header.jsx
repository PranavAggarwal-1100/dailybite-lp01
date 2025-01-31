import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50">
      <header 
        className={`max-w-[90%] transition-all duration-300 rounded-2xl backdrop-blur-md
          ${isScrolled 
            ? 'bg-white/80 shadow-lg py-2 px-6' 
            : 'bg-black/5 py-3 px-8'}`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">DailyBite</span>
            <p className="text-sm text-neutral-600 hidden sm:block">
              Track. Analyze. Transform.
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button className="button-primary text-base">
              Start Your Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-600" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-600" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#hero" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </MobileNavLink>
              <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </MobileNavLink>
              <button className="button-primary text-base w-full">
                Start Your Journey
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-neutral-600 hover:text-primary transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-neutral-600 hover:text-primary transition-colors text-base font-medium"
  >
    {children}
  </a>
);

export default Header;