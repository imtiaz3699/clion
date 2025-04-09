import React from "react";
import { Link } from "react-router";

function Logo({ footer }) {
  return (
    <>
      {footer ? (
        <div className="flex flex-row items-center gap-[8px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[#FA8232] flex items-center justify-center">
            <div className=" w-[24px] h-[24px] bg-[#191C1F] rounded-full flex items-center justify-center">
              <div className="w-[16px] h-[16px] bg-[#FA8232] rounded-full"></div>
            </div>
          </div>
          <p className="font-bold text-[18px] leading-[16px] text-white">
            CLICON
          </p>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-[8px]">
          <Link to={"/"}>
          <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center">
            <div className=" w-[24px] h-[24px] bg-[#1B6392] rounded-full flex items-center justify-center">
              <div className="w-[16px] h-[16px] bg-white rounded-full"></div>
            </div>
          </div>
          <p className="font-bold text-[18px] leading-[16px] text-white">
            CLICON
          </p>
          </Link>
        </div>
      )}
    </>
  );
}

export default Logo;
