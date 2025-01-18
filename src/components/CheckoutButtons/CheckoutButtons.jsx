import React from "react";
import { CartIcon } from "../Icons/Icons";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";

function CheckoutButtons() {
  return (
    <div className="flex flex-row items-center justify-between gap-[16px] w-full ">
      <div className="max-w-[164px] w-full flex flex-row items-center h-[56px] justify-between p-4 border-[3px] border-gray-300 rounded-[5px]">
        <FaMinus />
        <input value="0" className="w-[20px] outline-none" />
        <LuPlus />
      </div>
      <button
        className=" !h-[56px] text-[18px] text-white font-medium bg-[#FA8232] hover:bg-[#ea8f52] flex items-center justify-center gap-[12px] w-full rounded-[5px] "
        iconPosition="end"
        type="primary"
      >
        Add To Cart <CartIcon className="text-white " />
      </button>
      <button className="!h-[56px] text-[18px] text-[#FA8232] font-medium max-w-[142px]  border-[1px] border-[#FA8232] flex items-center justify-center gap-[12px] w-full rounded-[5px]">
        Book Now
      </button>
    </div>
  );
}

export default CheckoutButtons;
