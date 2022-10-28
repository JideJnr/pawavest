import React, {  useEffect, useState } from 'react'
import Bar from '../assets/svg/Bar';
import X from '../assets/svg/X'
import Logo from './../assets/logo.png'
const Nav = () => {

  
  const Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/s"},
      {name:"Media",link:"/m"},
      {name:"PAWACOIN",link:"/p"},
    
    ];
    const [open,setOpen]=useState(false);
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
  


  return (
    <div className='shadow-md w-full fixed bg-black text-white top-0 left-0 flex  '>
      <div className='flex items-center justify-between  p-5 md:px-10 w-full md:w-fit '>
       
        <div className=' cursor-pointer flex items-center'>
          
          <img src={Logo} alt="Pawavest-logo" className='h-8 '/>
          
        </div>
      
        <div onClick={()=>setOpen(!open)} className='w-fit h-fit my-auto ml-auto md:hidden '>
        {open ? <X/> : <Bar/>}
        </div>


      </div>

      <ul className={`md:flex md:items-center md:p-0 p-5 absolute md:static bg-black text-white md:bg-inherit md:z-auto left-0 w-full md:w-fit mx-auto  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='px-5 text-xl md:my-0 my-7 '>
              <a href={link.link} className=' hover:text-gray-700 duration-500 text-center'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>

      <div className='md:grid grid-cols-2 my-auto mr-3  rounded-3xl text-xs text-white px-3 py hidden'>
        <div className='px-1 border-white border-r'>
        <p>Faq</p>
        </div>
        <div className='px-1'>
        <p>Get in touch</p>
        </div>
      </div>


    </div>
  )
}

export default Nav