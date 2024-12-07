import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'SnapSuite: Professional Headshots, Simplified',
  description: 'Create stunning, professional headshots in minutes with SnapSuite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-screen">{children}</body>
    </html>
  )
}

