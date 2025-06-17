'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaMobileAlt, FaChartLine, FaLaptopCode, FaFileInvoiceDollar } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: <FaFileInvoiceDollar size={24} className="text-sky-300" />,
      text: 'Precision-driven tax strategies tailored for your financial health and compliance.',
    },
    {
      icon: <FaLaptopCode size={24} className="text-sky-300" />,
      text: 'Stunning, responsive websites that captivate and convert.',
    },
    {
      icon: <FaCloud size={24} className="text-sky-300" />,
      text: 'Robust, secure, and scalable cloud solutions to future-proof your operations.',
    },
    {
      icon: <FaMobileAlt size={24} className="text-sky-300" />,
      text: 'Scalable, high-performance mobile solutions that keep your business in your customer’s pocket.',
    },
    {
      icon: <FaChartLine size={24} className="text-sky-300" />,
      text: 'ROI-focused marketing strategies that amplify your brand’s reach and drive engagement.',
    },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-r from-[#001e6c] via-[#0039a6] to-[#000921] py-10 px-4 text-white overflow-hidden">
      
      {/* Tab Heading */}
      <div className="text-center mb-16">
        <motion.h2
          className="inline-block px-6 py-1 text-3xl font-bold bg-[#002387] text-white rounded-full shadow-lg border border-blue-300 glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400">A</span>bout Us
        </motion.h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ml-8">
        
        {/* Left - Features */}
        <div className="space-y-6">
          <motion.h3
            className="text-2xl font-semibold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Empowering Your Digital Vision with Innovation & Expertise
          </motion.h3>
          
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="min-w-[32px]">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Right - Illustration */}
        <motion.div
          className="flex justify-center items-center  shadow-[0_0_40px_10px_rgba(135,206,250,0.4),0_4px_30px_rgba(255,255,255,0.7)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/services/about-illustration.png" // You must place your vector illustration here
            alt="About Sai Digital Team"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
