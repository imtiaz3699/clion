import { Button } from 'antd'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function HeroSlider() {
  return (
    <>
        <div className = 'flex flex-row items-center justify-between h-full gap-[36px]'>
            <div className = 'flex flex-col '>
            <div className = 'text-[#2DA5F3] text-[16px] font-normal flex items-center gap-[8px] '>
               <div className = 'h-[2px] w-6 bg-[#2DA5F3]'></div> <span className = 'font-medium'>THE BEST PLACE TO PLAY</span>
               

            </div>
            <p className = 'font-bold text-[45px]'>Xbox Consoles</p>
            <p className = 'text-gray-700 text-[20px] font-medium max-w-[356px] w-full mt-[16px]'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
            <Button
            className = 'bg-[]'
            icon={<IoIosArrowRoundForward />}
            iconPosition='end'
            
            >
                Shop Now
            </Button>

            </div>
            <div className = 'font-medium'>fasdfd</div>
        </div>
    </>
  )
}

export default HeroSlider
