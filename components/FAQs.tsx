import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why use SnapSuite over professional photographers?",
    answer: "SnapSuite saves you time and money while delivering studio-quality results with customizable attire and style.",
  },
  {
    question: "How many photos should I upload?",
    answer: "For the best results, upload 20-25 photos in various lighting, outfits, and settings. Our AI performs better with diverse inputs.",
  },
  {
    question: "Can I use these headshots on platforms like LinkedIn?",
    answer: "SnapSuite headshots are optimized for LinkedIn, resumes, and social media profiles.",
  },
  {
    question: "How long does it take to generate the headshots?",
    answer: "SnapSuite generates your headshots within minutes of uploading your photos.",
  },
  {
    question: "Are my photos secure?",
    answer: "Yes, your photos are processed securely and deleted after generating your headshots.",
  },
]

export default function FAQs() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100" id="faqs">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">SnapSuite FAQs</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg shadow-md">
              <AccordionTrigger className="text-left font-poppins text-gray-800 p-4 hover:bg-purple-50 transition-colors">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 p-4 bg-purple-50">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

