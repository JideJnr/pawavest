import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-screen h-full  font-["roboto"]' >
        <div className='w-full h-full px-5 py-10 sm:py-20'>

          <div className='flex flex-col rounded-xl  mx-auto my-auto text-center text-2xl font-medium md:text-4xl w-fit'>
            <p>
              Want A Free Consultation?
            </p>
              <Link to='/c' className='text-blue-500 text-xl my-3'>
                Contact us
              </Link>
            
          </div>

          



        </div>
    </div>
  )
}

export default Contact