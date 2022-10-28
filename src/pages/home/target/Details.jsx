import React from 'react'

const Details = ({name,img,company,text}) => {
  return (
    <div className='flex flex-col md:flex-row mx-auto my-auto p-10'>
          <div className='my-5 mb-5 mx-auto '>
            <img
            src={img}
            className='h-full w-full  '
            alt=''/>
          </div>

          <div className='text-sm p-5 '>

            <p className='mb-5  tracking-wider uppercase text-md '>
               {text}
              </p>
              
              <p className=' text-md   uppercase'>
                  {name}
              </p>
              
              <p className=' text-sm    '>
                {company} 
              </p>


            
          </div>

    </div>
  )
}

export default Details