import { CheckCircle } from 'lucide-react'

const features = [
  "AI-powered transformation",
  "Customizable attire and style",
  "Instant results in minutes",
  "Professional-grade output"
]

export default function Features() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container px-4 md:px-6 text-center">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 mx-auto bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CheckCircle className="text-purple-500" />
              <span className="font-medium text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

