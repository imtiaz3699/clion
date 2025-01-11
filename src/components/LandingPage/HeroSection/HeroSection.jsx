import React from "react";
import HeroSlider from "./HeroSlider";
import { useUser } from "../../../context/context";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  const { user } = useUser();
  console.log(user, "IamUser");
  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="max-w-[1320px] h-[520px]  w-full flex flex-row items-center justify-between gap-[24px]">
        <div className="w-[872px] bg-gray-200 h-[520px] rounded-[6px] px-[54px]">
          <HeroSlider />
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-[5px] relative overflow-hidden h-[248px] flex flex-row items-center  w-[424px] bg-[#191C1F] pl-[40px]">
            <div className="flex flex-col items-start">
              <p className="text-[#EBC80C] text-[18px]  ">SUMMER SALES</p>
              <span className="font-medium text-[30px] text-gray-300 ">
                New Google Pixel 6 Pro
              </span>
              <Button
                className="mt-[24px] !h-[56px] text-[18px] font-medium"
                icon={<FaArrowRight />}
                iconPosition="end"
                type="primary"
              >
                Shop Now
              </Button>
            </div>

            <div className="w-[200px] h-[201px] translate-y-10 translate-x-2">
              <img src="/image-5.png" className="w-full h-full object-cover" />
            </div>
            <div className="absolute  right-10 bg-[#EFD33D] text-[25px] top-5 px-2 py-1 rounded-[3px]">
              29% OFF
            </div>
          </div>
          <div className="rounded-[5px] h-[248px] bg-gray-200 w-[424px] flex flex-row items-center justify-center gap-[20px]">
            <div> <img src = '/imageFour.png' /> </div>
            <div className="">
              <p className = 'font-medium text-[30px] text-gray-900'>Xiaomi FlipBuds Pro</p>
              <p className = 'text-[#2DA5F3] text-[16px] font-medium'>$299 USD</p>
              <div>
                <Button
                  className="mt-[24px] !h-[56px] text-[18px] font-medium"
                  icon={<FaArrowRight />}
                  iconPosition="end"
                  type="primary"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
