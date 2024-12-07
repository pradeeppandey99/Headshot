import { Clock, DollarSign, Shirt, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Create headshots in minutes, not hours.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'No expensive photographers or studios required.',
  },
  {
    icon: Shirt,
    title: 'Customizable Attire',
    description: 'Choose any outfit or style that fits your brand.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Perfection',
    description: 'Our AI creates flawless headshots using your everyday photos.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Why Choose SnapSuite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

