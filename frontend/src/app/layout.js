import './globals.css'

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <body >{children}</body>
      <Footer />
    </div>
  )
}
