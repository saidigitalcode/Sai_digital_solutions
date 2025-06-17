'use client';

import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Auditing & Tax Consulting',
    desc: 'Easy MSME registration, CST services',
    image: '/services/audit.jpg',
  },
  {
    title: 'Data Solutions',
    desc: 'Microsoft Fabric, Power BI Dashboards',
    image: '/services/data.jpg',
  },
  {
    title: 'Cloud Solutions',
    desc: 'AWS & Azure setup, DevOps Automation',
    image: '/services/cloud.jpg',
  },
  {
    title: 'Digital Marketing',
    desc: 'Power BI + Microsoft Fabric integration',
    image: '/services/marketing.jpg',
  },
  {
    title: 'IT Development',
    desc: 'Web & App Development, UI/UX design',
    image: '/services/development.jpg',
  },
];


// Clone the items to simulate infinite scroll
const infiniteServices = [...services, ...services, ...services];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.05; // Speed
      if (Math.abs(x.current) >= containerRef.current.scrollWidth / 3) {
        x.current = 0; // Reset after 1 full loop
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section id="services" className="bg-[#e4f0fd] text-black py-24 px-4 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          className="inline-block px-6 py-1 text-3xl font-bold bg-[#002387] text-white rounded-full shadow-lg border border-blue-300 glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400">O</span>ur services
        </motion.h2>
      </div>

      <div className="relative max-w-[100vw] overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 w-max will-change-transform"
        >
{infiniteServices.map((s, i) => (
  <motion.div
    key={i}
    className="min-w-[300px] bg-[#002387] text-white rounded-xl shadow-xl overflow-hidden"
    whileHover={{ scale: 1.05, rotateY: 5 }}
    style={{
      transformStyle: 'preserve-3d',
    }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (i % services.length) * 0.1 }}
  >
    <div className="relative w-full h-40">
      <Image
        src={s.image}
        alt={s.title}
        layout="fill"
        objectFit="cover"
        className="rounded-t-xl"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
      <p>{s.desc}</p>
      <button className="mt-4 text-sm underline">Read more</button>
    </div>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}
