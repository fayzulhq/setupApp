import CardItem from "../components/CardItem"
import TitleSection from "../components/TitleSection"

const data_styles = [
  {
    title : 'DaisyUI',
    link : '/documentations/npm'
  },
  {
    title : 'MatetialUI',
    link : '/documentations/react'
  },
  {
    title : 'FlowbiteJs',
    link : '/documentations/react-tailwind-cra'
  },
  {
    title : 'animateCSS',
    link : '/documentations/react-tailwind-vite'
  },
]

const data_add = [
    {
      title : 'lodash',
      link : '/documentations/npm'
    },
    {
      title : 'EmailJs',
      link : '/documentations/react'
    },
    {
      title : 'React-table',
      link : '/documentations/react-tailwind-cra'
    },
    {
      title : 'React-form',
      link : '/documentations/react-tailwind-vite'
    },
    {
      title : 'React-icon',
      link : '/documentations/react-tailwind-vite'
    },
  ]
const CardContainer = () => {
  return (
    <>
    <TitleSection text='For Styling' className='m-5'/>
    <div className='flex flex-col justify-center px-10'>
      {data_styles.map(({title,link})=>(
          <CardItem title={title} link={link} key={title}/>
          ))}
    </div>

    <TitleSection text='For Addition' className='m-5'/>
    <div className='flex flex-col justify-center px-10'>
      {data_add.map(({title,link})=>(
          <CardItem title={title} link={link} key={title}/>
          ))}
    </div>
    </>
  )
}

export default CardContainer