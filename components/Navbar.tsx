'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const handleJoinWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScRdb-Sw6F7XAUk17L9I9KDIDV4UKraYFGt38HSclxiwJqmFg/viewform?usp=header', '_blank')
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50 border-b-2 border-purple-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
          <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="SnapSuite Logo"
                width={32}  // Specify width
                height={32} // Specify height
                priority
              />
            </div>
            <span className="text-2xl font-bold font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              SnapSuite
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
              How It Works
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-purple-600 transition-colors">
              FAQs
            </a>
          </div>
          <div className="flex items-center">
            <Button
              onClick={handleJoinWaitlist}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins transition-all duration-300 transform hover:scale-105"
            >
              Join the Waitlist Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

