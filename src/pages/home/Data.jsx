import React from 'react'
import Love from '../../assets/svg/Love'
import SatisfiedUnit from './SatisfiedUnit'

const Data = () => {
  return (
    <div>
        <div className='mx-auto  grid grid-cols-1 gap-8  lg:grid-cols-4 w-fit p-10 text-center'>
        
            <SatisfiedUnit
            text='Satisfied Customer'
            svg={<Love/>}
            num={23}/>

            <SatisfiedUnit
            text='Satisfied Customer'
            svg={<Love/>}/>

            <SatisfiedUnit
            text='Satisfied Customer'
            svg={<Love/>}/>
            
            <SatisfiedUnit
            text='Satisfied Customer'
            svg={<Love/>}/>




        </div>
    </div>
  )
}

export default Data