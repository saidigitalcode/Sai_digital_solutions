'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);

  // 3D Tilt Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 15 });
  const rotateX = useTransform(smoothY, [-100, 100], [15, -15]);
  const rotateY = useTransform(smoothX, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (ref.current as unknown as HTMLDivElement).getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Typing Animation
  const fullText = 'ai digital olutions';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        setIndex(index + 1);
      } else {
        // Reset after short pause
        setTimeout(() => {
          setDisplayedText('');
          setIndex(0);
        }, 2000);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="home" className="relative z-10  py-24 px-6 md:px-16 overflow-hidden gap-20">
      {/* White blurred background shapes */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] z-0" />

      <div className="ml-0 relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side: Typing Heading */}
<motion.div
  className="flex-1 text-center md:text-left bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl text-white drop-shadow flex items-center">
            <span
              className="text-orange-400 text-9xl sm:text-9xl inline-block font-playfair"
style={{ fontFamily: `'Courier New', Courier, monospace` }}
            >
              S
            </span>
            <span className="ml-1">{displayedText}</span>
            <span className="text-white animate-pulse ml-1">|</span>
          </h1>

          <p className="max-w-xl mt-6 text-lg sm:text-xl text-white/90">
            Your trusted partner for Auditing, IT Solutions, Cloud Infrastructure, Data Analytics, and Digital Marketing. We combine expertise with innovation to empower your business for tomorrow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#services">
              <button className="bg-white text-[#002387] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
              Explore Services
            </button>
            </a>
            <a href="#contact">
              <button  className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#002387] transition duration-300 shadow-md">
              Contact Us
            </button>
            </a>

          </div>
        </motion.div>

        {/* Right Side: Interactive Tilt Image */}
{/* Right Side: Interactive Tilt Image */}
<motion.div 
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ rotateX, rotateY, transformPerspective: 1000 }}
  className="flex-1 flex justify-end relative mr-0"
>
  {/* Circular glowing gradient border container */}
<div className="w-74 h-64 rounded-2xl p-1 bg-gradient-to-br from-white to-sky-400 animate-glow-pulse shadow-[0_0_40px_10px_rgba(135,206,250,0.4),0_4px_30px_rgba(255,255,255,0.3)] transition-shadow duration-500">
  <div className="w-full h-full rounded-2xl overflow-hidden mr-0">
    <Image
      src="/sai-hero.png"
      alt="Sai Digital Illustration"
      width={256}
      height={256}
      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 mr-0"
    />
  </div>
</div>



</motion.div>


      </div>
    </section>
  );
}
