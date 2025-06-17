'use client';

// import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Home, Briefcase, Info, Phone } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', icon: <Home size={18} className="text-orange-400 mr-2" /> },
    { label: 'Services', href: '#services', icon: <Briefcase size={18} className="text-orange-400 mr-2" /> },
    { label: 'About Us', href: '#about', icon: <Info size={18} className="text-orange-400 mr-2" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#001e6c] via-[#0039a6] to-[#000921] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-1">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <div style={{height:'60px', width:'60px'}}>

          </div>
          {/* <Image
            src="/sai.png"
            alt=""
            width={100}
            height={100}
            priority
            className="h-20 w-auto object-contain scale-150"
          /> */}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center font-medium ">
          {navItems.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center group relative px-3 py-1 rounded-full transition duration-300 hover:shadow-lg hover:border hover:border-blue-300 hover:bg-[#002387]"
            >
              {icon}
              <span className="text-white group-hover:glow font-bold">
                <span className="text-orange-400 ">{label.charAt(0)}</span>{label.slice(1)}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center bg-gradient-to-r from-[#002387] to-[#000921] px-5 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg hover:border hover:border-blue-300 transition-all duration-300"
          >
            <Phone size={18} className="text-orange-400 mr-2" /> Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-[#000921] text-sm font-medium">
          {navItems.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center group px-3 py-2 rounded-full hover:shadow-lg hover:border hover:border-blue-300 transition-all duration-300"
            >
              {icon}
              <span className="ml-1 text-white group-hover:glow">
                <span className="text-orange-400">{label.charAt(0)}</span>{label.slice(1)}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center py-2 px-5 rounded-full bg-gradient-to-r from-[#002387] to-[#000921] text-white font-semibold shadow-md hover:shadow-lg hover:border hover:border-blue-300 transition-all duration-300"
          >
            <Phone size={18} className="text-orange-400 mr-2" /> Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
