import Header from '@/app/components/header'
import './../../globals.css'
import { ContactUs } from '@/app/components/Contact'

export const metadata = {
  title: 'npm Setup',
}

const Layout = ({children}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-32">{children}</div>
    </>
  )
}

export default Layout