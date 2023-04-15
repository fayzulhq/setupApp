import React from 'react'

const CodeButton = ({text}) => {
  return (
    <p className=" flex w-full justify-center py-6 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:p-4 hover:bg-gray-900 font-mono font-bold underline underline-offset-[15px] hover:no-underline duration-300">
    {text}
    </p>
  )
}

export default CodeButton