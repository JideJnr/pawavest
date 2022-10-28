import React from 'react'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import PopOver from '../../components/PopOver'
import Team from '../team/Team'
import Commercial from './Commercial'
import Main from '../../components/Main'
import ServicesMobile from './ServicesMobile'
import ServiceTab from './ServiceTab'
import Contact from '../../components/Contact'
import We from './We'


const Service = () => {

  const items = [
    <ServicesMobile 
    text='we offer outright buy of our inverters'
    details='you can pay cheap price for full and get the inverter full outrightly'/>,
    <ServicesMobile/>,
    <ServicesMobile/>,
    <ServicesMobile/>,
    
  ];
  return (
    <div className='w-screen max-w-screen overflow-x-clip  overflow-y-auto flex flex-col'>
    <PopOver/>
    <Main text='Solar Going Global'details="You're Welcome To Begin This Journey With Us" bg='bg-black'/>
    <Commercial/>
    <We/>
    <div className='md:hidden'>
      <Carousel items={items}/>
    </div>
    <div className='hidden md:flex'>
      <ServiceTab/>
    </div>
   
    



    

    <Team/>

    <Contact/>

    
    <Footer/>
  </div>
  )
}

export default Service