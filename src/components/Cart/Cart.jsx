import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";





function Cart() {
  return (
    <div className = 'flex flex-row items-center gap-[24px]'>
      <BsCart2 className = 'text-white text-[20px] hover:text-gray-400 delay-75 cursor-pointer'/>
      <LuHeart className = 'text-white text-[20px] hover:text-gray-400 delay-75 cursor-pointer'/>
    </div>
  )
}

export default Cart
