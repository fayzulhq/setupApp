import React from 'react'

const ParagraphSection = ({text,className}) => {
  return (
    <div>
        <p className={`text-md leading-6 text-slate-400 ${className}`}>{text}</p>
    </div>
  )
}

export default ParagraphSection