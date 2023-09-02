import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
 
export const metadata = {
  title: "Chase Mathis",
  description: 'Chase Mathis is a Computer Science student and aspiring software engineer who builds full stack applications to build experiences for the web',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} scroll-smooth`} >
      <body>{children}</body>
    </html>
  )
}
