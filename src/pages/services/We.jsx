import React from 'react'

const We = () => {
  return (
    <div className='  font-["Monserrat"] p-5 sm:py-10 sm:px-0  w-screen h-full  flex flex-col    text-black   bg-white max-w-4xl mx-auto'>

        <div className='flex flex-col md:grid md:grid-cols-9 md:gap-4 my-5 '>
            <div className='col-span-4 px-10 py-5 mb-5 border border-yellow-500 shadow-sm shadow-yellow-500 hover:scale-110 transition ease-in-out delay-150 duration-300 '>
                <p className='text-xl mb-2 text-yellow-500 font-semibold'>Who Are We?</p>
                <p className='text-sm mb-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est sequi quae aspernatur, ratione eveniet perspiciatis 
                    molestias ipsam quia assumenda, nostrum odio architecto.
                    Voluptates qui perspiciatis dolores id, neque nemo autem.
                </p>
                <p  className='text-xs mb-2'> > FAQ</p>
                <p className='text-xs mb-2'> > CONTACT US</p>
            </div>
            <div className='col-end-10 col-span-4 px-10 py-5 mb-5 border border-yellow-500 shadow-sm  shadow-yellow-500 hover:scale-110 transition ease-in-out delay-150 duration-300'>
                <p className='text-xl mb-2 text-yellow-500 font-semibold '>What We Want?</p>
                <p className='text-sm '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est sequi quae aspernatur, ratione eveniet perspiciatis 
                    molestias ipsam quia assumenda, nostrum odio architecto.
                    Voluptates qui perspiciatis dolores id, neque nemo autem.
                </p>

            </div>
        </div>
    </div>
  )
}

export default We