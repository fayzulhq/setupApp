import React from 'react'
import CardItem from '../components/CardItem'

const data = [
  {
    title : 'Install NPM',
    link : '/set/1'
  },
  {
    title : 'Setup React JS',
    link : '/set/2'
  },
  {
    title : 'Setup React JS + Tailwind + CRA',
    link : '/set/2'
  },
  {
    title : 'Setup React JS + Tailwind + Vite',
    link : '/set/3'
  },
  {
    title : 'Setup Next.Js + Tailwind + CNA',
    link : '/set/3'
  },
  {
    title : 'Setup Next.Js + Tailwind + CRA',
    link : '/set/4'
  },
]

const CardContainer = () => {
  return (
    <div className='flex flex-col justify-center'>
      {data.map(({title,link})=>(
        <CardItem title={title} link={link} key={title}/>
      ))}
    </div>
  )
}

export default CardContainer