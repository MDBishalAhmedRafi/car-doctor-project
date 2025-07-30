"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="px-6 py-12 md:py-20 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[280px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/assets/images/about_us/person.jpg"
              alt="Mechanic"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-[200px] h-[200px] border-4 border-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="Tools"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-[#FF3811] font-semibold mb-2">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            We are qualified <br />
            & of experience <br />
            in this field
          </h2>
          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-gray-600 mb-6">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-[#FF3811] cursor-pointer text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-all duration-200">
            Get More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
