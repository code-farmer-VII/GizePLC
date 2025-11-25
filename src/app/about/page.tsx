import AboutSection from '../../component/About/AboutSection'
import GoalSection from '../../component/About/Goal'
import Hero from '../../component/About/HeroAbout'
import HeroSection from '../../component/About/HeroSection'
import ResearchingConsultant from '../../component/About/ResearchingConsultant'
import ServicesSection from '../../component/About/ServiceHome'
import React from 'react'

export default function page() {
  return (
    <div >
      <Hero />
      <div className='w-full bg-white'>
      <AboutSection />
      <ResearchingConsultant />
      <GoalSection />
      <HeroSection />
      </div>
    </div>
  )
}
