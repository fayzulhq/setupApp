import Header from '@/app/components/header'
import './../../globals.css'
import { ContactUs } from '@/app/components/Contact'

export const metadata = {
  title: 'ReactJS + tailwindCss + vite Setup',
}

const Layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Header link="/documentations" tag="Back"/>
        <div className="max-w-3xl mx-auto mt-32">{children}</div>
        <ContactUs/>
      </body>
    </html>
  )
}

export default Layout