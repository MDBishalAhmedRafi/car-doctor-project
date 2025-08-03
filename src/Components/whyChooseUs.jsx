'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

const features = [
  { title: 'Expert Team', active: false },
  { title: 'Timely Delivery', active: false },
  { title: '24/7 Support', active: false },
  { title: 'Best Equipment', active: false },
  { title: '100% Guarantee', active: false },
  { title: 'Timely Delivery', active: false },
];

const companyLogos = [
  '/assets/icons/check.svg',
  '/assets/icons/deliveryt.svg',
  '/assets/icons/person.svg',
  '/assets/icons/quote.svg',
  '/assets/icons/Wrench.svg',
  
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-[#FF3811] font-semibold mb-2">Core Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-500 mb-10 max-w-3xl mx-auto">
          The majority have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 border rounded-lg text-sm font-medium transition-all duration-300 ${
                item.active
                  ? 'bg-[#FF3811] text-white border-[#FF3811]'
                  : 'hover:bg-[#FF3811]/10 text-gray-700 border-gray-200'
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Trusted by Leading Brands</h3>
          <Marquee speed={50} gradient={false}>
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index}`}
                className="h-12 mx-6 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
