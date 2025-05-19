
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SummarySection from '@/components/SummarySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SummarySection />
      <Footer />
    </div>
  );
};

export default Index;
