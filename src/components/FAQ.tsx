'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { question: 'What services does Sai Digital Services offer?', answer: 'We offer Tax Consulting, Web & App Development, Cloud Solutions, and more.' },
  { question: 'Who can benefit from our services?', answer: 'Startups, small businesses, and enterprises seeking digital growth.' },
  { question: 'How long does it take to get MSME registration?', answer: 'Typically within 2-5 business days, depending on documentation.' },
  { question: 'Will the website be mobile-friendly?', answer: 'Yes, we ensure fully responsive design on all devices.' },
  { question: 'Can you migrate our existing infrastructure to AWS or Azure?', answer: 'Absolutely! We specialize in cloud migration and DevOps automation.' },
  { question: 'What is Microsoft Fabric and how can it help my business?', answer: 'It’s a unified data platform that streamlines insights and boosts analytics performance.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq"className="relative bg-[#e4f0fd] py-20 px-6 z-[1] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-[#ff9900]">Frequently</span> <span className='text-[#002387]'>asked questions</span> 
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}  className="bg-gradient-to-r from-[#001e6c] via-[#0039a6] to-[#000921] text-white rounded-lg p-4 shadow-lg z-0">
              <button
                className="w-full flex justify-between items-center text-left text-base md:text-lg font-medium"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                {faq.question}
                <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1">
          <img src="/services/faq-image.png" alt="FAQ Illustration" className="w-full max-w-sm mx-auto" />
        </div>
      </div>
    </section>
  );
}
