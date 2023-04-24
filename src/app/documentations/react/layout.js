import { ContactUs } from '@/app/components/Contact'
import Header from '@/app/components/header'
import './../../globals.css'

export const metadata = {
  title: 'React JS Setup',
}

const Layout = ({children}) => {
  return (
  <>
    <div className="max-w-3xl mx-auto mt-32">{children}</div>
  </>
  )
}

export default Layout