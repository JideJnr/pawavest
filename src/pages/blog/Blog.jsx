import React from 'react'
import { Tab } from '@headlessui/react'
import Grid from './GridView'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import ListView from './ListView'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Blog() {
  
    const help = [  
        <Tab.List className='grid grid-cols-2 mt-5 gap-4 row-span-1 w-fit'>
        


        
            <Tab
                
                className={({ selected }) =>
                classNames(
                    'bg-blue-500 px-2 py-1  rounded-sm w-fit h-fit my-auto ',
                
                    selected
                    ? '  '
                    : ' '
                )
                }
            >


                    
                            <p className=' '>
                                List View
                            </p>
                        
                        
                
                
                
            </Tab>
        
            <Tab
                
                className={({ selected }) =>
                classNames(
                    'bg-blue-500 px-2 py-1  rounded-sm w-fit h-fit my-auto ',
                
                    selected
                    ? '  '
                    : ' '
                )
                }
            >


                    
                            <p className='  '>
                            Grid View
                            </p>
                        
                        
                
                
                
            </Tab>
        
            
        </Tab.List>
]

  return (
    <div>
        <Tab.Group>
            <div className='w-screen overflow-y-auto'>

        
            <Main
            text='our Blog'
            details={help}
            bg='bg-black'/>


                <div className=' '>
                    <Tab.Panels>
                    
                        <Tab.Panel>
                        <ListView/>
                        
                        
                        </Tab.Panel>
                            
                        <Tab.Panel>
                        <Grid/>
                        
                        
                        </Tab.Panel>
                    
                    
                    </Tab.Panels>
                

                    
                </div>

            </div>
        </Tab.Group>
        <Footer/>
    </div>
  
  )
}