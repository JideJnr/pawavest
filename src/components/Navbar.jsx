import React, {  useState } from 'react'
import Bar from '../assets/heroicon/Bar';
import X from '../assets/heroicon/X'
import Logo from './../assets/logo.png'

const Navbar = () => {

    
  const Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/s"},
    {name:"Media",link:"/m"},
    {name:"PAWACOIN",link:"/p"},
  
  ];
  const [open,setOpen]=useState(false);



  return (
    <div className='shadow-md w-full absolute bg-black s'>
        <div className='flex items-center justify-between py-4 md:py-10 px-7 '>
            
            <div className='cursor-pointer flex'>
                          
                <img src={Logo} alt="" className='h-8 '/>


            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                {open ? <X/> : <Bar/>}
            </div>


            <ul className={`flex items-center md:pb-0 pb-12 absolute md:static bg-[#eeeeee] md:bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-5 border md:border-0 border-black'>
                    <a href={link.link} className='text-blue-500 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
                ))
                }
            
            </ul>


        </div>
        
    </div>
  )
}

export default Navbar