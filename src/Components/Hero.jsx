"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Find Delicious Recipes Instantly",
    subtitle: "Search by ingredients and cook like a pro.",
    image: "https://i.ibb.co/VhbBjH8/1.jpg",
  },
  {
    title: "Healthy Meals at Your Fingertips",
    subtitle: "Explore hundreds of healthy recipes for free.",
    image: "https://i.ibb.co/gF4cvrxx/2.jpg",
  },
  {
    title: "Cook Smart, Eat Better",
    subtitle: "Save your favorites and build your meal plan.",
    image: "https://i.ibb.co/gLFNHw3D/3.jpg",
  },
  {
    title: "Cook Smart, Eat Better",
    subtitle: "Save your favorites and build your meal plan.",
    image: "https://i.ibb.co/WNCmrZ0k/4.jpg",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center text-center text-white bg-cover bg-center px-4"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "darken",
              }}
            >
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;