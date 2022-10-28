import React from 'react'
import Main from '../../components/Main'
import Form from './Form'

const Contact = () => {
  return (
    <div className='w-screen h-screen overflow-y-auto '>
      <Main bg='bg-black' text='Get In Touch'/>
      <div className='grid grid-cols-2 gap-4 p-5 sm:p-10'>
        <div className=''>

        </div>
        <div className=''>
          <Form/>

        </div>
      </div>
    </div>
  )
}

export default Contact