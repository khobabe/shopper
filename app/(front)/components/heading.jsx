import React from 'react'

const Heading = ({bg_color,title,subtitle}) => {
  return (
    <div className={`flex felx-1 flex-col gap-2 text-white px-[5%] py-10 ${bg_color}`}> 
        <h1 className='font-semibold text-3xl capitalize'>{title}</h1>
        <p className='text-xs font-light'>{subtitle}</p>
    </div>
  )
}

export default Heading