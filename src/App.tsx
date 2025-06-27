import React from 'react';
import Navbar from './components/shared/Navbar';
import BannerSection from './components/home/BannerSection';
import AboutSection from './components/home/AboutSection';
import SolutionsSection from './components/home/SolutionsSection';
import TechnologySection from './components/home/TechnologySection';
import BenefitsSection from './components/home/BenefitsSection';
import CaseUseSection from './components/home/CaseUseSection';
import ContactSection from './components/home/ContactSection';
import SolutionsInAction from './components/home/SolutionsInAction';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <div className='font-[Inter] text-[#f8fafc] bg-[#0f172a] overflow-x-hidden'>
      <Navbar />
      <BannerSection />
      <div className='relative mt-0 bg-[#0f172a] z-5'>
        <div className='h-[60px] w-full'></div>
        <AboutSection />
        <SolutionsSection />
        <SolutionsInAction />
        <TechnologySection />
        <BenefitsSection />
        <CaseUseSection />
        <ContactSection />
      </div>
      <Footer />
      <div
        style={{
          position: 'fixed',
          zIndex: 9999,
          inset: '16px',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default App;
