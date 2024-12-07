'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import FAQs from '@/components/FAQs'
import CTA from '@/components/CTA'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <FAQs />
      <CTA />
    </div>
  )
}

