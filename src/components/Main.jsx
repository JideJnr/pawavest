import React from 'react'
import Nav from './Nav'


const Main = ({bg,text,details}) => {
  return (
    <div className= {` w-screen text-white  flex-col  text-center font-['montserrat'] uppercase flex  h-screen ${bg} bg-no-repeat bg-cover`} >
      <Nav/>

      <div className=' flex flex-col mx-auto my-auto w-fit h-fit p-5 '>
      
          <p className='text-2xl md:text-5xl max-w-3xl mx-auto tracking-widest leading-10  mb-5' >
            {text}
          </p>
        
          <p className='text-md mb-5 md:text-[18px] max-w-xl mx-auto tracking-widest leading-8' >
              {details}
            </p>
            
      </div>
  
    </div>
  )
}

export default Main