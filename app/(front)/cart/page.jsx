import React from 'react'
import Heading from '../components/heading'
import { CartList } from './_components/cartlist'
import { PriceBreak } from './_components/price-break'
import CouponForm from './_components/coupon-form'

const page = () => {
  return (
    <>
    <Heading bg_color="bg-black" title="My Cart" subtitle="Manage your cart by adding some products"/>
    <div className='flex flex-1 gap-4 mt-5 px-[5%]'>
        <div className="w-9/12">
            <CartList/>
        </div>
        <div className="w-3/12">
        <PriceBreak/>
        <CouponForm/>
        </div>
    </div>
    </>
  )
}

export default page