import './../globals.css'
import Header from './../components/header'
import {BiArrowBack} from 'react-icons/bi'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header link='/documentations' tag={<BiArrowBack color='white'/>}/>
        
        {children}</body>
    </html>
  )
}
