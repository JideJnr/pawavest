import React from 'react'
import Counter from '../../components/Counter'

const SatisfiedUnit = ({text,svg,num}) => {
  return (
    <div className='p-5 border-b border-yellow-500 text-2xl text-yellow-500 '>  

        <div className='flex mx-auto w-fit font-semibold py-2'>
            <div>
                <Counter num={num}/>
            </div>
            <div class="h-10 w-10 animate-bounce text-yellow-500 mx-2" >

                {svg}
            </div>
        </div>
        <div>
            <p className='font-medium text-black text-xl py-2'>
                {text}
            </p>
        </div>

    </div> 

  )
}

export default SatisfiedUnit