import  Carousel  from '../../components/Carousel'
import React from 'react'

const TeamDetails = ({name,title ,bg,items}) => {

   
      


  return (
    <div className= {`border rounded-xl ${bg} bg-cover bg-no-repeat flex flex-col max-w-xs mx-auto w-[230px] h-[300px] `}>

    <div className='w-full h-full bg-black hover:flex hover:bg-yellow-500 hidden '>

    </div>

    <div className='w-full p-3 mt-auto bg-[#eeeeee] bg-opacity-90 '>
        <p className='text-xl font-semibold  text-blue-500 '>
            {name}
        </p>
        <p className='font-medium'>
            {title}
        </p>
        <div className='my'>

            <Carousel items={items} 
            mouseTracking
            infinite
            autoPlayInterval={500}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls

        
            autoPlay/>
        </div>
    </div>
</div>

  )
}

export default TeamDetails