import { Upload, Wand2, Download } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Photos',
    description: 'Add multiple photos for the best results. Ensure variety in lighting, attire, and settings.',
  },
  {
    icon: Wand2,
    title: 'Let SnapSuite Work Its Magic',
    description: 'Our advanced AI transforms your photos into professional-grade headshots in just minutes.',
  },
  {
    icon: Download,
    title: 'Download Your Perfect Headshots',
    description: 'Get polished, platform-ready images customized to your style.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Create Stunning Headshots with SnapSuite in 3 Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

