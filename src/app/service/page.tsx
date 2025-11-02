"use client"
import React from 'react'
import HeroSection from '../../component/About/HeroSection'
import HeroService from '@/component/Services/HeroService'
import ServicesSection from '@/component/Services/ServiceHome'
import Footer from '@/component/Home/Footer'


export default function page() {
  return (
    <div>
      <HeroService />
      <ServicesSection />
      <div className='bg-white'>
        <HeroSection />
      </div>
        <Footer />
    </div>
  )
}
