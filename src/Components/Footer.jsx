'use client';

import Image from 'next/image';
import React from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={"assets/logo.svg"} alt="logo" width={32} height={32}/>
            <h2 className="text-lg font-bold">Car Doctor</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="bg-gray-700 hover:bg-[#FF3811] p-2 rounded-full">
              <FaGoogle />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-[#FF3811] p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-[#FF3811] p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-[#FF3811] p-2 rounded-full">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Service</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Why Car Doctor</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Support Center</a></li>
            <li><a href="#" className="hover:text-white">Feedback</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
