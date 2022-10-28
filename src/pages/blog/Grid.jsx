import React from 'react'
import { Link } from 'react-router-dom'

const Grid = ({img,text,details}) => {
  return (
    <div className='flex flex-row lg:flex-col border rounded-xl w-full text-black hover:shadow-sm   hover:scale-105 transition ease-in-out delay-150 duration-300'>
    
    <div>
      <img src={img} alt="" className='w-fit rounded-t-xl' />
    </div>
    
    <div className='p-5  h-full '>
        <p className='font-medium text-md md:text-xl mb-2'>
            {text}
        </p>

        <p className='text-sm md:text-md'>
            {details}
            <Link className='text-blue-500'>
              Read More
            </Link>
        </p>
    </div>
    
</div>
  )
}

export default Grid