import React from 'react'
import Header from '@/app/components/header'
import './../../globals.css'

const Layout = ({children}) => {
  return (
    <html lang="en">
      <body className='pb-32'>
        <Header link="/documentations" tag="Back" title='Set' />
        <div className="max-w-3xl mx-auto mt-32">{children}</div>
      </body>
    </html>
  )
}

export default Layout