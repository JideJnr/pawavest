import React from 'react'
import photo from './../../assets/photo.jpg'
import Logo from './Logo';
import shopify from './../../assets/shopify.png'



import TeamDetails from './TeamDetails'

const Team = () => {

    const items = [
        <Logo
         company={shopify}
         />,
<Logo
         company={photo}
         />,

<Logo
         company={shopify}
         />
        
        
      ];
      

  return (
    <div className=' w-full h-full text-center flex flex-col font-["roboto"] p-10 max-w-6xl mx-auto'>
        <div className='text-center'>
            <div className=' py-5  mx-auto'>
                <p className='uppercase   sm:text-2xl leading-8 md:leading-10 md:tracking-widest text-green-500'>
                    Work Together With 
                </p>
            </div>

            <div className=' py-5   border-t border-[#eeeeee] w-fit mx-auto'>
                <p className='uppercase  text-3xl leading-8 md:leading-10 md:tracking-widest'>
                    Our Team
                </p>
            </div>
            
            
        </div>

        < div className=' my-5 py-5 md:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-auto '>
        

            <TeamDetails
            name='Fadekunayo Adeniyi'
            img={photo}
            title='Chief Operating Officer'
            bg='bg-fade'
            items={items}
            />


            <TeamDetails
            name='Chukwuka Okoli '
            img={photo}
            title='Chief Executive Officer'
            bg='bg-chuks'
            items={items}/>


            <TeamDetails
            name='Ibikunle Martins'
            img={photo}
            title='Technical Operations'
            bg='bg-shasha'
            items={items}/>

     
        </div>
    </div>
  )
}

export default Team