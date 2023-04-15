import React from 'react'
import CardItem from '../components/CardItem'

const data = [
  {
    title : 'Install NPM',
    link : '/documentations/npm'
  },
  {
    title : 'Setup React JS',
    link : '/documentations/react'
  },
  {
    title : 'Setup React JS + Tailwind + CRA',
    link : '/documentations/react-tailwind-cra'
  },
  {
    title : 'Setup React JS + Tailwind + Vite',
    link : '/documentations/react-tailwind-vite'
  },
  {
    title : 'Setup Next.Js + Tailwind + CNA',
    link : '/documentations/next-tailwind-cna'
  },
  {
    title : 'Setup Next.Js + Tailwind + CRA',
    link : '/documentations/next-tailwind-cra'
  },
]

const CardContainer = () => {
  return (
    <div className='flex flex-col justify-center px-10'>
      {data.map(({title,link})=>(
        <CardItem title={title} link={link} key={title}/>
      ))}
    </div>
  )
}

export default CardContainer