import React from 'react'

import { Popover } from '@headlessui/react'
import Contact from '../pages/contact/Contact'

const PopOver = () => {
  return (
    <Popover  className="relative">
    {({ open }) => (
      <>
        <Popover.Button className='fixed bottom-10 right-10'>
              <div class="bg-white rounded-lg shadow-md px-4 py-2 border-1 border-gray-400">
                  Help?
              </div>
          </Popover.Button>
        <Popover.Overlay  />

        <Popover.Panel className="absolute z-10">
     
        </Popover.Panel>
      </>
    )}
  </Popover>


  )
}

export default PopOver

