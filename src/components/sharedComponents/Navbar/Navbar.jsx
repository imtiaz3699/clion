import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import MainNav from "./MainNav/MainNav";

function Navbar() {
  return (
    <>
      <div className="bg-gray-900 h-[80px] flex items-center justify-center w-full relative">
        <div className="max-w-[1320px] w-full flex flex-row items-center justify-between  text-white ">
          <div className="flex flex-row items-center gap-[12px]">
            <span className="bg-[#EBC80C] text-[16px] w-[70px] h-[40px] text-black font-medium flex items-center justify-center -rotate-3 ">
              Black
            </span>
            <span className="font-bold text-gray-100 text-[16px]">Friday</span>
          </div>
          <p className="text-[20px] font-medium flex items-center gap-2 ">
            Up to{" "}
            <span className="text-[#EBC80C] font-bold text-[35px]"> 59%</span>{" "}
            off
          </p>
          <Button
            icon={<FaArrowRightLong />}
            iconPosition="end"
            className="bg-[#EBC80C] !py-[30px] !px-6 text-[#191C1F] !rounded-[1px] text-[16px] hover:text-black font-medium"
          >
            Shop Now
          </Button>
        </div>
        <div className="bg-[#303639] w-[32px] h-[32px] rounded-[2px] flex items-center justify-center absolute right-4">
          <IoCloseSharp className="text-[#FFFFFF]" />
        </div>
      </div>

      <div className="bg-[#1B6392] w-full h-[52px] flex items-center justify-center">
        <div className="max-w-[1320px] w-full flex flex-row items-center justify-between  text-white">
          <p className="text-[#FFFFFF] font-medium text-[12px]">
            Welcome to Clicon online eCommerce store.{" "}
          </p>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-3">
              <span className="text-[#FFFFFF] font-medium text-[12px]">
                Follow us:
              </span>
              <FaXTwitter />
              <BsFacebook />
              <FaPinterestP />
              <IoLogoYoutube />
              <BsInstagram />
            </div>
            <div className="w-[1px] bg-gray-400 h-[20px]"></div>
            <div className="flex flex-row items-center gap-[8.5px]">
              <span className="text-[14px] font-medium">Eng</span>
              <RiArrowDropDownLine className="text-gray-400 text-[25px]" />
            </div>
            <div className="flex flex-row items-center gap-[8.5px]">
              <span className="text-[14px] font-medium">USD</span>
              <RiArrowDropDownLine className="text-gray-400 text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <MainNav />
    </>
  );
}

export default Navbar;
