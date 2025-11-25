"use client"
import React from 'react'
import HeroSection from '../../component/About/HeroSection'
import HeroService from '@/component/Services/HeroService'
import Services from '@/component/Home/Services'


export default function page() {
  return (
    <div>
      <HeroService />
      <Services />
      <div className='bg-white'>
        <HeroSection />
      </div>
    </div>
  )
}
