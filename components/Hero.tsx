import { Button } from '@/components/ui/button'
import Image from 'next/image'

const handleJoinWaitlist = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScRdb-Sw6F7XAUk17L9I9KDIDV4UKraYFGt38HSclxiwJqmFg/viewform?usp=header', '_blank')
}

export default function Hero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 text-center lg:text-left">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <div className="flex flex-col justify-center items-center lg:items-start space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                SnapSuite: Professional Headshots, Simplified
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl mx-auto lg:mx-0">
                Say goodbye to costly photoshoots and endless waiting. Create stunning, professional headshots in minutes—with the flexibility to choose any outfit or style.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleJoinWaitlist}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-poppins transition-all duration-300 transform hover:scale-105"
              >
                Join the Waitlist Now
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/out-0%20(2)-yRMCpTKsej1N6CkaVGuHz9tbcfAEIt.webp"
                alt="AI-generated headshot"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

