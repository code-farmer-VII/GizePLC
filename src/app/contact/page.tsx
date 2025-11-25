import React from 'react'
import ContactSection from '../../component/Contact/Contact'
import FAQ from '../../component/Contact/FAQ'
import ImageSection from '../../component/Contact/ImageSection'

export default function page() {
  return (
    <div>
      <FAQ />
      <ImageSection />
      <ContactSection />
    </div>
  )
}
