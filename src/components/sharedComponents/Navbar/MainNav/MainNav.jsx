import React from 'react'
import Logo from '../../Logo/Logo'
import { Input } from 'antd'
import NavSearch from '../../../NavSearch/NavSearch'
import Cart from '../../../Cart/Cart'
import User from '../../../User/User'

function MainNav() {
  return (
    <div className = 'border-t-[0.1px] border-[#215a80] w-full bg-[#1B6392] h-[88px] flex flex-row items-center justify-center'>
      <div className = 'max-w-[1320px] w-full flex items-center justify-between'>
        <Logo/>
        <NavSearch/>
        <div className = 'flex flex-row items-center gap-[24px]'>
        <Cart/>
        <User/>
        </div>

      </div>
    </div>
  )
}

export default MainNav
