import React from 'react'

const CodeButton = ({text}) => {
  return (
    <p className="text-sm flex w-full justify-center p-2 lg:py-3 backdrop-blur-2xl lg:static lg:w-auto rounded-lg lg:px-6 hover:bg-gray-900 font-mono font-bold underline underline-offset-[15px] hover:no-underline duration-300">
    {text}
    </p>
  )
}

export default CodeButton