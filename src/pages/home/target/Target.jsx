import React from 'react'

import Details from './Details';

import Carousel from '../../../components/Carousel';
import photo from '../../../assets/photo.jpg'


const Target = () => {

  
const items = [
  <Details
  name='OLAJIDE AHMED'
  company='Fedex GROUP'
  text='    I really like the way pawavest handle my solar installation projects.their staf were really professional and i would jump at any chance to work with them again'
  img={photo}
  />,
  <Details
  name='OLAJIDE AHMED'
  company='Bee-JAY GROUP'
  text='   I really like the way pawavest handle my solar installation projects.their staf were really professional and i would jump at any chance to work with them again'
  img={photo}
  />,
  <Details
  name='OLAJIDE AHMED'
  company='Bee-JAY GROUP'
  text=' i amnot really okay with the stellar job done by service co and it has been a tremenrbd experience working with then'
  img={photo}
  />,
];
  return (
    <div className=" w-full  h-full bg-[url('\try.png')]  bg-no-repeat bg-cover text-white px-5 py-10 font-sans" >

      <div className=' flex max-w-2xl mx-auto my-auto '>

        <Carousel items={items}/>

      </div>
      
     
    </div>
  )
}

export default Target