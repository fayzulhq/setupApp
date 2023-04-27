import CardContainer from "./CardContainer.others"
import './../globals.css'
import Header from "../components/header"

const Page = () => {
  return (
    <div className='mx-auto'>
        <Header tag='Back' link='/' className='mb-32'/>
        <CardContainer />
    </div>
  )
}

export default Page