import React from 'react'
import { Link } from 'react-router-dom'

const List = ({text,date,details,bg}) => {
  return (
    <div className={`flex flex-col p-5 hover:bg-black hover:bg-opacity-20 ${bg} `}>
        <p className='text-xl font-medium mb-1 uppercase'>{text}</p>
        <p className='mb-1 text-sm'>{date}</p>
        <p className='text-sm mb-2'>{details}</p>
        <Link to='/' className='text-blue-500 text-xs'>Read More</Link>
    </div>
  )
}

export default List