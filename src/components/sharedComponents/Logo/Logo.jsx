import React from 'react'

function Logo() {
  return (
    <div className = 'flex flex-row items-center gap-[8px]'>
    <div className = 'w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center'>
        <div className = ' w-[24px] h-[24px] bg-[#1B6392] rounded-full flex items-center justify-center'>
            <div className = 'w-[16px] h-[16px] bg-white rounded-full'></div>
        </div>
    </div>
    <p className = 'font-bold text-[18px] leading-[16px] text-white'>CLICON</p>
    </div>
  )
}

export default Logo
