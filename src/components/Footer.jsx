import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.png'

const Footer = () => {
  return (
    <div className=" w-screen  h-full  bg-black text-white    py-10 " >
      
       <div className='flex flex-col md:flex-row w-fit mx-auto mb-5 md:mb-10'>


        
        <div className='flex h-fit md:my-auto my-5'>
              <img
              src={logo}
              alt=''
              className='w-[200px]'
              />

        </div>

       
        <div className='grid text-sm   w-fit mx-auto md:mx-10 grid-cols-1 md:grid-cols-3 gap-3 md:gap-10'> 
        
          <div className='text-center flex flex-col border-t border-yellow-600 w-fit p-5 mx-auto h-fit my-auto '>

            <Link to=' ' className=' hover:underline'>
              About
            </Link>

            <Link to='p' className=''>
              Process
            </Link >

            <Link to=' ' className=''>
              Solution
            </Link >

            <Link to=' ' className=''>
              Sustainability
            </Link >

          </div>

          <div className='text-center  flex flex-col border-t border-yellow-600 w-fit p-5 mx-auto h-fit my-auto'>
              
              <Link to=' ' className=' '> 
                Partners
              </Link >

              <Link to=' ' className=''>
                Media
              </Link >

              <Link to='f' className=''>
                FAQ
              </Link>    


          </div>

          <div className='text-center flex flex-col border-t border-yellow-600 w-fit p-5 mx-auto h-fit my-auto'>

            <Link to='c' className=''>
              Contact
            </Link >

            <Link to=' ' className=''>
              Quotations
            </Link >

          
          </div>
      
        </div> 


       </div>
      
        <div  className='text-center text-[12px]'>
        
        <Link to=' '  className=''>
            PRIVACY POLICY
        </Link >

        <Link to=' '  className=''>
            TERMS OF SERVICE
        </Link>
        </div>   


    </div>
  )
}

export default Footer