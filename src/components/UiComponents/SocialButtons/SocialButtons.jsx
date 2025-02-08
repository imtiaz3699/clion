import React from "react";
import { GoogleIcon,AppleIcon } from "../../Icons/Icons";
function SocialButtons() {
  return (
    <div className="flex flex-col gap-[12px] mb-5">
      <div className="flex flex-row items-center justify-between border-[1px] py-[12px] px-[16px] rounded-[3px] cursor-pointer hover:border-[#FA8232] hover:text-[#FA8232] ">
        <div className="">
          <GoogleIcon className="text-[25px]" />
        </div>
        <p className="">Login with google</p>
        <div className=""></div>
      </div>
      <div className="flex flex-row items-center justify-between border-[1px] py-[12px] px-[16px] rounded-[3px] cursor-pointer hover:text-[#FA8232] hover:border-[#FA8232]">
        <div className="">
          <AppleIcon className="text-[25px]" />
        </div>
        <p className="">Login with google</p>
        <div className=""></div>
      </div>
    </div>
  );
}

export default SocialButtons;
