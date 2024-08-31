import React from 'react'
import StaticCard from './_components/static-card'

const page = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
       <StaticCard bg="indigo" title="Total Products" no={10}/> 
       <StaticCard bg="pink" title="Total Orders" no={10}/> 
       <StaticCard bg="yellow" title="Total Categories" no={10}/> 
       <StaticCard bg="light-green" title="Total Delivered" no={10}/> 
    </div>
  )
}

export default page