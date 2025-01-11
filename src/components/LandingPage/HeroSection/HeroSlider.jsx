import { Button } from "antd";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useUser } from "../../../context/context";

function HeroSlider() {
  const { products } = useUser();
  console.log(products?.data[0]?.url, "UserUser");
  return (
    <>
      <div className="flex flex-row items-center justify-between h-full gap-[36px]">
        <div className="flex flex-col ">
          <div className="text-[#2DA5F3] text-[16px] font-normal flex items-center gap-[8px] ">
            <div className="h-[2px] w-6 bg-[#2DA5F3]"></div>{" "}
            <span className="font-medium">THE BEST PLACE TO PLAY</span>
          </div>
          <p className="font-bold text-[45px]">Xbox Consoles</p>
          <p className="text-gray-700 text-[20px] font-medium max-w-[356px] w-full mt-[16px]">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
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
        <div className="h-[408px] relative">
          <img src="/Image.png" />
          <div className="w-[100px] h-[100px] rounded-full bg-[#2DA5F3] flex items-center justify-center absolute top-0 right-0 text-[25px] font-medium text-white">
            $299
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
