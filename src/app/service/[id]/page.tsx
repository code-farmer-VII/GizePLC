"use client"
import Footer from '@/component/Home/Footer';
import HeroSection from '../../../component/Services/HeroSection';
import ServiceDetail from '../../../component/Services/ServiceDetail'
import { useParams } from 'next/navigation'
import React from 'react'
import Services from '@/component/Home/Services';

export default function Page() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  return (
    <div>
      <ServiceDetail id={id} />
            <Services />
<div className='bg-white'>
    <HeroSection />
</div>    
    </div>
  );
}
