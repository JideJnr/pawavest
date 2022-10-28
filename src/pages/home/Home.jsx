import React from 'react'
import About from './About'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Satisfied from './Satisfied'
import Contact from '../../components/Contact'
import PopOver from '../../components/PopOver'
import Target from './target/Target'
import Data from './Data'
import Newsletter from '../../components/Newsletter'

const Home = () => {


  
  return (
    <div className='w-screen max-w-screen overflow-x-clip  overflow-y-auto flex flex-col'>
      <PopOver/>
      
      <Main bg='bg-main'  text='CLEAN AFFORDABLE ENERGY FOR CHEAP'  details='Save up to 20% on energy costs and increase property value up to 10% – all at zero cost.'/>
      
      <About/>

      <Satisfied/>
 
      <Data/>
      <Target/>

      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home