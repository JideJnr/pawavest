import React from 'react'
import List from './List'

const ListView = ({text,details}) => {
  return (
    <div className=' max-w-4xl mx-auto py-10'>
        <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='we would be introdu'/>
                <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque maxime eum ipsa culpa omnis. Odit, officiis sapiente aliquid, nesciunt exercitationem nulla, optio eos perspiciatis ab blanditiis sequi aut! Perferendis, molestias.'/>
                <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='we would be introdu'
        />
              <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='we would be introdu'
        />
              <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='we would be introdu'
        />
              <List
        text='pagavest resvaels new upbringing'
        date='24 SEP,2022.'
        details='we would be introdu'
        />
        <p className='text-xs text-blue-500 text-center my-3'>Load More Entries</p>
        
    </div>

  )
}

export default ListView