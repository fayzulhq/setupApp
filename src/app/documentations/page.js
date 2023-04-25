import './../globals.css'
import CardContainer from './CardContainer'
import Header from '../components/header'

import React from 'react'

const Documentations = () => {
  return (
    <div className='mx-auto'>
        <Header tag='Back' link='/' className='mb-32'/>
        <CardContainer />
    </div>
  )
}

export default Documentations