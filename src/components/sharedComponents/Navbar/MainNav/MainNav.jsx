import React from "react";
import Logo from "../../Logo/Logo";
import { Input } from "antd";
import NavSearch from "../../../NavSearch/NavSearch";
import Cart from "../../../Cart/Cart";
import User from "../../../User/User";
import NavDropDown from "../NavDropDown/NavDropDown";
import { CiLocationOn } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { PiHeadphonesBold } from "react-icons/pi";
import { BsExclamationDiamond } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { useUserContext } from "../../../../context/userContext";

function MainNav() {
  const menu = [
    {
      url: "",
      name: "Track Order",
      img: <SlLocationPin className = 'text-[16px]' />,
    },
    {
      url: "",
      name: "Compare",
      img: <IoIosGitCompare/>,
    },
    {
      url: "",
      name: "Customer Support",
      img: <PiHeadphonesBold className = 'text-[16px]'/>,
    },
    {
      url: "",
      name: "Need Help",
      img: <BsExclamationDiamond className = 'text-[16px]'/>,
    },
  ];

  return (
    <div>
      <div className="border-t-[0.1px] border-[#215a80] w-full bg-[#1B6392] h-[88px] flex flex-row items-center justify-center">
        <div className="max-w-[1320px] w-full flex items-center justify-between">
          <Logo />
          <NavSearch />
          <div className="flex flex-row items-center gap-[24px]">
            <Cart />
            
            <User />
          </div>
        </div>
      </div>
      <div className="h-[80px] border-b-[1px] border-b-gray-200 flex flex-row items-center justify-center">
        <div className="max-w-[1320px] w-full flex items-center justify-between">
          <div className="flex flex-row items-center gap-6 ">
            <NavDropDown />
            <div className="flex flex-row items-center gap-6">
              {menu?.map((element, idx) => {
                return (
                  <div className="flex flex-row items-center gap-[6px] cursor-pointer group font-medium" key = {idx}>
                    <div className = 'text-gray-900 group-hover:text-[#FA8232] delay-300 transition-opacity'>{element?.img}</div>
                    <p className = 'text-gray-500 text-[16px] group-hover:text-[#FA8232] delay-300 transition-opacity'>{element?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <tel  className = 'flex flex-row items-center gap-3 font-medium text-gray-900'>
          <FiPhoneCall className = 'text-gray-900'/> +1-202-555-0104
          </tel>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
