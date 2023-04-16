import './globals.css'
import Header from './components/header'

export const metadata = {
  title: 'Quick Setup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pb-32">
        <Header link='/' tag="Create By Fyz" />
        {children}</body>
    </html>
  )
}
