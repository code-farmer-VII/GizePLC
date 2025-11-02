import React from 'react'
import Footer from '@/component/Home/Footer'
import ContactSection from '../../component/Contact/Contact'
import FAQ from '../../component/Contact/FAQ'

export default function page() {
  return (
    <div>
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  )
}
