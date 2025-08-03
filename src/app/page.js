import About from '@/Components/About';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import TeamSlider from '@/Components/TeamSlider';
import WhyChooseUs from '@/Components/whyChooseUs';
import Services from '@/app/components/Services'
import React from 'react';
export default function Home() {
  return (
    <div>
      <Hero></Hero>
    <About></About>
    <Services></Services>
    <TeamSlider></TeamSlider>
    <WhyChooseUs></WhyChooseUs>
    <Footer></Footer>
    </div>
  );
}
