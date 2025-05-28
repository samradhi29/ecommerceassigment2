import React from 'react';
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Copyright,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToFinalOrderPage = () => {
    navigate('/Final'); 
  };

  return (
    <footer className="bg-black text-white  relative ml-3 mr-3">
      <div className="border-t border-gray-700 mb-6"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center text-2xl font-semibold">
            Eclypse
            <ArrowUpRight size={16} className="ml-1 mt-1" />
          </div>

          {/* Nav Links */}
          <nav className="text-sm text-gray-300 space-x-3 flex flex-wrap">
            <span>Home</span>
            <span>/</span>
            <span>About</span>
            <span>/</span>
            <span>Buy</span>
            <span>/</span>
            <span>Our Customers</span>
            <span>/</span>
            <span>Contacts</span>
          </nav>

          {/* Contact Info */}
          <div>
            <p className="uppercase text-xs text-gray-400 mb-1">Contact</p>
            <p className="text-lg font-medium">+91 123-456-7890</p>
          </div>

          <div>
            <p className="uppercase text-xs text-gray-400 mb-1">Email</p>
            <p className="text-sm">eclypse@gmail.com</p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
          <button
            onClick={scrollToTop}
            className="bg-white text-black p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <ChevronUp size={18} />
          </button>
        </div>

        {/* Bottom Right Copyright */}
        <div className="text-xs text-gray-500 mt-4 md:mt-0 self-end md:absolute bottom-6 right-6">
          <div className="flex items-center gap-1">
            <Copyright size={12} />
            <span>Eclypse 2025</span>
          </div>
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-[#222] text-white rounded-full flex items-center gap-6 px-4 py-1">
          <button>
            <ChevronLeft size={16} />
          </button>
          <button onClick={goToFinalOrderPage}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
