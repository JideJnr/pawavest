import React from 'react'

const News = ({img,text,details}) => {
  return (
    <div className='flex flex-row lg:flex-col border rounded-xl w-full bg-main bg-no-repeat bg-cover min-h-[150px] md:min-h-[300px] text-white hover:shadow-3xl'>
    
    
    <div className='p-3 sm:p-5  h-full w-4/5'>
        <p className='font-medium text-md md:text-xl mb-2'>
            {text}
        </p>

        <p className='text-sm md:text-md'>
            {details}
        </p>
    </div>
    
</div>
  )
}

export default News