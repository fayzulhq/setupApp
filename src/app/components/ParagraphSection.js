import React from 'react'

const ParagraphSection = ({text,className}) => {
  return (
    <div>
        <p className={`text-sm leading-6 text-slate-500 ${className} mb-10`}>{text}</p>
    </div>
  )
}

export default ParagraphSection