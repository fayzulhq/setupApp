import './../../globals.css'
import { ContactUs } from '@/app/components/Contact'
import Header from '@/app/components/header'

export const metadata = {
  title: 'ReactJS + tailwindCss + vite Setup',
}

const Layout = ({children}) => {
  return (
    <>
      <Header tag='Back' link='/documentations'/>
      <div className="max-w-3xl mx-auto mt-32">{children}</div>
    </>
  )
}

export default Layout