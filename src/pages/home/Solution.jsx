import React from 'react'
import Love from './../../assets/svg/Love'
import SolutionUnit from './SolutionUnit'
const Solution = () => {
  return (
    <div className=' bg-white w-full p-10 text-center font-["montserrat"] text-black text-lg '>
        <div className='mx-auto p-5 my-auto grid grid-cols-1 gap-8  lg:grid-cols-3 w-fit  '>
             
            <SolutionUnit
            text='Quality Assured'
            svg={<Love/>}
            details='Quality is assured'/>
            <SolutionUnit/>
            <SolutionUnit/>
            
            
        </div>
    </div>
  )
}

export default Solution