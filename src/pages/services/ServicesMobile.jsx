import React from 'react'

const ServicesMobile = ({text,details,bg}) => {
  return (
    <div className={` h-full ${bg} bg-no-repeat bg-cover p-10 grid grid-rows-4 gap-4 border rounded-xl border-white  text-white     `}>
    <div  className='text-3xl row-span-1 '>

    <p>
      {text}
    </p>
    </div>

    <div  className='row-span-2'>
    <p>
       {details}
    </p>

    </div>
    

    <div className='row-span-1 bg-black text-white rounded-xl text-lg px-3 py-1  h-fit w-fit mx-auto'>
      Learn More
    </div>

  </div>
  )
}

export default ServicesMobile