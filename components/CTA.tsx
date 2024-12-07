'use client'

import { Button } from '@/components/ui/button'

export default function CTASection() {
  const handleJoinWaitlist = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScRdb-Sw6F7XAUk17L9I9KDIDV4UKraYFGt38HSclxiwJqmFg/viewform?usp=header', '_blank')
  }

  return (
    <section 
      className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden" 
      id="cta-section"
    >
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 font-poppins">
          Join the SnapSuite Wishlist Today!
        </h2>
        <p className="mb-8 text-lg text-purple-100">
          Be among the first to experience the future of professional headshots.
        </p>
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleJoinWaitlist}
            size="lg"
            className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-100 font-poppins transition-all duration-300 transform hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  )
}