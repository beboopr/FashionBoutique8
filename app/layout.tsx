import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'fashionBoutique8',
  description: 'Las mejor calidad mundial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar />
      <body className="relative">
        {children}
      <Footer />
      </body>
    </html>
  )
}

// import "./globals.css";

// import { Footer, NavBar } from "@components";

// export const metadata = {
//   title: "fashionBoutique8",
//   description: "Discover world's best car showcase application",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en'>
//       <body className='relative'>
//         <NavBar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }