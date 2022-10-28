import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='w-screen h-full  font-["roboto"]'>

        <div className='w-full h-full px-5 py-10 sm:py-20'>

            <div className='flex flex-col  mx-auto my-auto text-center  font-medium  w-fit'>
                
                <p className='uppercase text-3xl my-3'>
                    Newsletter signup
                </p>
    
                <p className='text-sm my-3'> Subscribe to get exclusive news on energy management    </p>
                <input type="text" className='my-3 border border-black' />
                <div className='px-10 py-1 bg-blue-600 text-white w-fit mx-auto my-3  rounded-lg'>
                    <p> Subscribe   </p>
                </div>

            </div>





</div>

     
        
    </div>
  )
}

export default Newsletter

