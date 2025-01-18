import React from "react";
import {
  CompareIcon,
  CopyIcon,
  FacebookIcon,
  InstagramIcon,
  LikeIcon,
} from "../Icons/Icons";

function ShareButtons() {
  return (
    <div className="text-[14px] text-gray-400 flex flex-row items-center justify-between gap-6">
      <div className="flex flex-row items-center gap-[24px]">
        <div className="flex flex-row items-center gap-[6px] cursor-pointer group hover:text-[#FA8232]">
          {" "}
          <LikeIcon className="text-gray-500 text-[15px] group-hover:text-[#FA8232]" />{" "}
          <span>Add to Compare</span>{" "}
        </div>
        <div className="flex flex-row items-center gap-[6px] cursor-pointer group hover:text-[#FA8232]">
          {" "}
          <CompareIcon className="text-gray-500 hover:text-[#FA8232] group-hover:text-[#FA8232]" />{" "}
          <span>Add to Compare</span>{" "}
        </div>
      </div>
      <div className="flex flex-row items-center gap-[12px]">
        <span>Share product: </span>
        <CopyIcon className="text-gray-500 hover:text-[#FA8232] cursor-pointer text-[15px]" />
        <FacebookIcon className="text-gray-500 hover:text-[#FA8232] cursor-pointer text-[15px]" />
        <InstagramIcon className="text-gray-500 hover:text-[#FA8232] cursor-pointer text-[15px]" />
      </div>
    </div>
  );
}

export default ShareButtons;
