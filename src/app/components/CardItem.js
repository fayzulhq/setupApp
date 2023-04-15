import Link from 'next/link'
import React from 'react'
import TitleSection from './TitleSection'

const CardItem = ({title,link}) => {
  return (
    <div className='px-6 py-3 bg-slate-800 mb-7 hover:bg-slate-900 hover:translate-x-4 duration-200'>
        <Link href={link}>
            <TitleSection text={title}/>
        </Link>
    </div>
  )
}

export default CardItem