import Image from 'next/image'

export default function SocialProof() {
  const beforeImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241013-WA0004.jpg-ZfwPxhqzXrlNsBN3GWQOH5XDLSmKvR.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-05%20at%209.45.42%20PM-ra8LYcyJCvetJcuskncBiSdYRqLhDv.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241203-WA0058.jpg-Y2EPQucF5l533ZKtQZYtY6puyoRlMO.jpeg"
  ]

  const afterImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/out-0%20(2)-yRMCpTKsej1N6CkaVGuHz9tbcfAEIt.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/out-0%20(6)-tbTdIgfTIgsvoYSZU9z4QJLf4DJMrd.webp",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/out-0%20(8)-GDNoPFDSDnqVyrsouQBfvd0dgCPoTp.webp"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Real Results with SnapSuite
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6 font-poppins text-purple-600">
              Before
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {beforeImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Image
                    src={src}
                    alt={`Before SnapSuite ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center mb-6 font-poppins text-pink-600">
              After
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {afterImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Image
                    src={src}
                    alt={`After SnapSuite ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-6 text-gray-700">
            Built using SnapSuite. See how you can create yours effortlessly!
          </p>
          <blockquote className="text-xl italic text-gray-600 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg shadow-md">
            &ldquo;SnapSuite made professional headshots a breeze&mdash;I didn&apos;t need a studio or expensive photographer!&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}