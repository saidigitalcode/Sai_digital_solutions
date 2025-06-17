'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import StarBackground from '@/components/StarBackground';

export default function HomePage() {

  return (
<main className="relative min-h-screen text-white overflow-x-hidden">
  {/* Background Image with opacity */}
  <div className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-100 z-0" />

  {/* Optional darker overlay */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Actual content */}
  <div className="relative z-10">
    <StarBackground />
    <Navbar />
    <Hero />
    <Services />
    <About />
    <FAQ />
    <Footer />
  </div>
</main>




  );
}
