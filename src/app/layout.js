import './globals.css'
import Header from './components/header'
import { ContactUs } from './components/Contact'

export const metadata = {
  title: 'Quick Setup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
