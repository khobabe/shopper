import React from 'react'
import { ProductCard } from './product-card'

const CardContainer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default CardContainer