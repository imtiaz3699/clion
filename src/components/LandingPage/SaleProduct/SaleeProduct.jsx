import { Button } from "antd";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function SaleeProduct() {
  return (
    <div className="w-full flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full bg-[#FFE7D6] flex items-center justify-between px-[72px] py-[50px]">
        <div className="">
          <p className ='bg-[#2DA5F3] max-w-[165px] py-1 text-white text-[12px] text-center'>SAVE UP TO $200.00</p>
          <p className = 'text-[65px] font-medium text-gray-900'>Macbook Pro</p>
          <p className = 'text-[25px] max-w-[424px] text-gray-700'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
          <Button
            className="mt-[24px] !h-[56px] text-[18px] font-medium"
            icon={<FaArrowRight />}
            iconPosition="end"
            type="primary"
          >
            Show Now
          </Button>
        </div>
        <div className = 'w-[536px] h-[424px]'>
        <img src = '/pcnow.png'/>
        </div>
      </div>
    </div>
  );
}

export default SaleeProduct;
