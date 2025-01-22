import React from 'react'
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard'

function Cart() {
  return (
    <div className = 'w-full flex items-center justify-center mt-[72px]'>
    <div className='max-w-[1320px] w-full flex flex-row items-center gap-[24px]'>
        <div className = 'max-w-[872px] w-full p-6'>
            <ShoppingCard/>
        </div>
        <div className = 'max-w-[424px] w-full'>

        </div>
    </div>
    </div>
  )
}

export default Cart
