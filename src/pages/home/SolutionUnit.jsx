import React from 'react'

const SolutionUnit = ({text,details,svg}) => {
  return (
    <div className='p-5 shadow-xl rounded-2xl '> 
    <div  class="h-10 w-10  text-yellow-500 mx-auto" >
        {svg}
    </div>

    <div>

        <p className=' my-3 font-medium text-xl'>
            {text}
        </p>
        <p className=' text-sm'>
            {details}
        </p>
    </div>

</div> 
  )
}

export default SolutionUnit