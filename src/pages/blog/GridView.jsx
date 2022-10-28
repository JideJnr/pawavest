import React from 'react'
import Grid from './Grid'
import Home from './../../assets/home.PNG'

const GridView = () => {
  return (
    <div className='w-full   mx-auto p-10 sm:px-20 '>
      
      
 
      <div className='grid grid-cols-1  md:grid-cols-3  xl:grid-cols-4 gap-10 '>

            <Grid   
            img={Home}
            text='        PawaVest Deploys New MiniGrid'
            details='                        The minigrid deployed along th ibadan express way axis is so beautifully done i could be considered state of the art ' />
           
           <Grid   
            img={Home}
            text='        PawaVest Deploys New MiniGrid'
            details='                        The minigrid deployed along th ibadan express way axis is so beautifully done i could be considered state of the art ' />
           
           <Grid   
            img={Home}
            text='        PawaVest Deploys New MiniGrid'
            details='                        The minigrid deployed along th ibadan express way axis is so beautifully done i could be considered state of the art ' />
           
                      
           
           <Grid   
            img={Home}
            text='        PawaVest Deploys New MiniGrid'
            details='                        The minigrid deployed along th ibadan express way axis is so beautifully done i could be considered state of the art ' />
           
      </div>
      <p className='text-xs text-blue-500 text-center my-3'>Load More Entries</p>

    </div>
  )
}

export default GridView