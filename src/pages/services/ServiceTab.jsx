import React from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServiceTab() {
  


  return (
    <div className='w-fit flex font-["montserrat"] mx-auto p-10'>
      <Tab.Group>
      <div className=' grid grid-cols-9 gap-4 font-["monserrat"]'>

      
        <div className='flex flex-col col-span-4'>

        


            <Tab.List className=" ">
            
            
            
            <div className='grid grid-cols-1 gap-5'>

                
              <div className=' text-xl p-5 text-yellow-500 font-semibold uppercase'>
                        <p>
                            Our Services
                        </p>
              </div>


              <Tab
                
                className={({ selected }) =>
                classNames(
                    'w-full  text-sm leading-5  rounded-lg mx-3 p-5 ',
                    'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60  ',
                    selected
                    ? '  text-blue-700 font-bold  bg-black  shadow-2xl'
                    : ' hover:bg-white/[0.12] hover:text-white font-semibold shadow-xl'
                )
                }
            >


                      <div className='h-fit my-auto '>
                            <p className=' text-yellow-500  uppercase font-["montserrat"]'>
                            Energy Management
                            </p>
                           
                           
                        </div>
                
                
              </Tab>
              
              <Tab
                
                className={({ selected }) =>
                classNames(
                    'w-full  text-sm leading-5  rounded-lg mx-3 p-5 ',
                    'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60 text-yellow-500 ',
                    selected
                    ? '  text-yellow-500 font-bold  bg-black shadow-2xl'
                    : ' hover:bg-white/[0.12] hover:text-yellow-500 font-semibold shadow-xl'
                )
                }
            >


                      <div className='h-fit my-auto '>
                            <p className='   uppercase font-["montserrat"]'>
                                                    Financial & Technical Due Diligence
                            </p>
                           
                           
                        </div>
                
                
              </Tab>

              <Tab
                
                className={({ selected }) =>
                classNames(
                    'w-full  text-sm leading-5  rounded-lg mx-3 p-5 ',
                    'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60 text-yellow-500 ',
                    selected
                    ? '  text-yellow-500 font-bold  bg-black   shadow-2xl'
                    : ' hover:bg-white/[0.12] hover:text-yellow-500 font-semibold shadow-xl'
                )
                }
            >


                      <div className='h-fit my-auto '>
                            <p className='   uppercase font-["montserrat"]'>
                            Engineering, Procurement, Construction
                            </p>
                           
                           
                        </div>
                
                
              </Tab>

            </div>

            
            </Tab.List>

        </div>


        <div className='col-end-10 col-span-4 '>
            <Tab.Panels>
                <Tab.Panel>
                    <div className=' h-full bg-back bg-no-repeat bg-cover p-10 grid grid-rows-4 gap-4 border rounded-xl border-white  text-white     '>
                      <div  className='text-3xl row-span-1 '>

                      <p>
                         Buy your outright solution
                      </p>
                      </div>

                      <div  className='row-span-2'>
                      <p>
                         Buy your outright solution
                      </p>

                      </div>
                      

                      <div className='row-span-1 bg-black text-white rounded-xl text-lg px-3 py-1  h-fit w-fit mx-auto'>
                        Learn More
                      </div>

                    </div>
                </Tab.Panel>
            
                <Tab.Panel>
                    <div>

                    </div>
                    <div className=' h-full bg-platform bg-no-repeat bg-cover p-10 grid grid-rows-4 gap-4 border rounded-xl border-white text-white     '>
                      <div  className='text-3xl row-span-1 '>

                      <p>
                         Buy your outright solution
                      </p>
                      </div>

                      <div  className='row-span-2'>
                      <p>
                         Buy your outright solution
                      </p>

                      </div>
                      

                      <div className='row-span-1 bg-black text-white rounded-xl text-lg px-3 py-1  h-fit w-fit mx-auto'>
                        Learn More
                      </div>

                    </div>
                </Tab.Panel>
            
                <Tab.Panel>
                    <div className=' h-full bg-more text-white bg-no-repeat bg-cover p-10 grid grid-rows-4 gap-4 border rounded-xl border-white       '>
                      <div  className='text-3xl row-span-1 '>

                      <p>
                         Buy your outright solution
                      </p>
                      </div>

                      <div  className='row-span-2'>
                      <p>
                         Buy your outright solution
                      </p>

                      </div>
                      

                      <div className='row-span-1 bg-black text-white rounded-xl text-lg px-3 py-1  h-fit w-fit mx-auto'>
                        Learn More
                      </div>

                    </div>
                </Tab.Panel>
            
            </Tab.Panels>
        

            
        </div>

        </div>
      </Tab.Group>
    </div>
  )
}