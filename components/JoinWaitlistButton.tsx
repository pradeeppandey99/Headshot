'use client'

import { Button } from '@/components/ui/button'

export default function JoinWaitlistButton() {
  const handleJoinWaitlist = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScRdb-Sw6F7XAUk17L9I9KDIDV4UKraYFGt38HSclxiwJqmFg/viewform?usp=header', '_blank')
  }

  return (
    <Button
      onClick={handleJoinWaitlist}
      size="lg"
      className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-100 font-poppins transition-all duration-300 transform hover:scale-105"
    >
      Join the Waitlist
    </Button>
  )
}