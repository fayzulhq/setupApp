import React from 'react'
import CodeButton from './code'
import Link from 'next/link'
import Head from 'next/head'

const Header = (props) => {
  return (
    <div>
        <Head>
            <title>{props.title}</title>
        </Head>
    <div className='flex justify-between mt-10 max-w-4xl mx-auto'>
        <Link href={props.link}><CodeButton text={props.tag}/></Link>
        <div className='flex gap-x-7'>
            <Link href='/documentations'><CodeButton text='Documentations'/></Link>
            <Link href='/others'><CodeButton text='Others'/></Link>
        </div>
    </div>
    </div>
  )
}

export default Header