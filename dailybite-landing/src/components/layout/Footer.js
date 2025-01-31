import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-primary">DailyBite</span>
            </div>
            <p className="text-neutral-400 mb-4">Track. Analyze. Transform.</p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" Icon={Instagram} />
              <SocialLink href="https://twitter.com" Icon={Twitter} />
              <SocialLink href="https://facebook.com" Icon={Facebook} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink href="#features" text="Features" />
              <FooterLink href="#testimonials" text="Testimonials" />
              <FooterLink href="#pricing" text="Pricing" />
              <FooterLink href="#faq" text="FAQ" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms of Use" />
              <FooterLink href="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg 
                  focus:outline-none focus:border-primary text-white"
              />
              <button className="w-full button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">&copy; {new Date().getFullYear()} DailyBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, Icon }) => (
  <a 
    href={href}
    className="text-neutral-400 hover:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} className="text-neutral-400 hover:text-primary transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;