'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ariana Smith',
    role: 'Frontend Developer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James Lee',
    role: 'Backend Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sophia Zhang',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    name: 'David Khan',
    role: 'DevOps Engineer',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Emily Rose',
    role: 'Project Manager',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const TeamSlider = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Meet Our Team</h2>
        <p className="text-gray-600">Our talented and passionate team members</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="px-4 md:px-8"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#FF3811]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>

              <div className="flex justify-center gap-4 mt-4 text-[#FF3811] text-lg">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSlider;
