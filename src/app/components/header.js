import React from 'react'
import CodeButton from './code'
import Link from 'next/link'

const Header = ({link,tag}) => {
  return (
    <div className='flex justify-between mt-10 max-w-4xl mx-auto'>
        <Link href={link}><CodeButton text={tag}/></Link>
        <div className='flex gap-x-7'>
            <Link href='/documentations'><CodeButton text='Documentations'/></Link>
            <Link href='/others'><CodeButton text='Others'/></Link>
        </div>
    </div>
  )
}

export default Header