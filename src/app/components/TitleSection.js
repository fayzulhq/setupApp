import React from 'react'

const TitleSection = ({text,className}) => {
  return (
    <div>
        <h1 className={`text-lg md:text-2xl leading-7 text-white font-semibold ${className}`}>{text}</h1>
    </div>
  )
}

export default TitleSection