import React from 'react'
import Footer from '@/component/Home/Footer'
import ContactSection from '../../component/Contact/Contact'
import FAQ from '../../component/Contact/FAQ'
import ImageSection from '../../component/Contact/ImageSection'

export default function page() {
  return (
    <div>
      <FAQ />
      <ImageSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
