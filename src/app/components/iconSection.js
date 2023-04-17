import React from 'react'
import Image from 'next/image'

const data = [
  {
    image : '/npm.svg',
    className : ''
  },
  {
    image : '/react.svg',
    className : ''
  },
  {
    image : '/tailwind.svg',
    className : ''
  },
  {
    image : '/vite.svg',
    className : ''
  },
  {
    image : '/next.svg',
    className : 'bg-white rounded-full border-2'
  },
  {
    image : '/ts.svg',
    className : ''
  },
]

const IconSection = () => {
  return (
    <div>
        <div className="mb-14 grid text-center lg:mb-0 grid-cols-3 md:grid-cols-6  mx-auto  gap-y-5 gap-x-10">
        {data.map(({image,className}) => (
          <Image key={image} className={`hover:-translate-y-3 transition-all duration-300 ${className}`} src={image} width={64} height={64} alt={image}/>
        ))}
      </div>
        
    </div>
  )
}

export default IconSection