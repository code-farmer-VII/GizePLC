"use client"
import Footer from '@/component/Home/Footer';
import HeroSection from '../../../component/Services/HeroSection';
import ServiceDetail from '../../../component/Services/ServiceDetail'
import ServicesSection from '../../../component/Services/ServiceHome';
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  return (
    <div>
      <ServiceDetail id={id} />
            <ServicesSection />
            <div className='bg-white'>
    <HeroSection />
            </div>
            <Footer />
    
    </div>
  );
}
