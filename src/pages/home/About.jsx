import React from 'react'

const About = () => {
  return (
    <div className=' w-full min-h-screen text-center flex flex-col font-["montserrat"] p-10 bg-black text-white'>

      
        <div className=' flex flex-col   mx-auto my-auto p-5  '>
          <div className=' py-10  border-b border-yellow-500 max-w-sm md:max-w-4xl mx-auto'>
            <p className='uppercase  text-2xl sm:text-3xl md:text-5xl  leading-8 md:leading-10 md:tracking-widest'>
                Darkness is only beautiful on screens
            </p>
          </div>
          <div className='py-10 md:max-w-4xl mx-auto'>
                
            <p className='text-lg xl:text-xl leading-7 tracking-wider '>
              Pawavest is on a mission to change the way people generate electricity. As an independent power provider, we are creating a world where renewable energy is the norm, not the exception. That’s why we’re committed to simplifying the process of accessing solar energy for commercial and industrial property owners, businesses, local governments, and homeowners, and renters. Whatever your need may be, we have you covered with on-site and community solar solutions.
            </p>
          </div>

        </div>
        

    </div>
  )
}

export default About