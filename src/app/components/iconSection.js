import React from 'react'
import {FaReact} from 'react-icons/fa'
import Image from 'next/image'


const IconSection = () => {
  return (
    <div>
        <div className="mb-24 grid text-center lg:mb-0 grid-cols-5  mx-auto gap-x-10">
        <Image src="/react.svg" width={64} height={64} alt="react"/>
        <Image src="/tailwind.svg" width={64} height={64} alt="react"/>
        <Image src="/vite.svg" width={64} height={64} alt="react"/>
        <Image src="/next.svg" width={64} height={64} alt="react" className='bg-white rounded-full border-2'/>
        <Image src="/ts.svg" width={64} height={64} alt="react"/>
        
      </div>
        
    </div>
  )
}

export default IconSection