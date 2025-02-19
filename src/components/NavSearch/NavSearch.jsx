import { Input } from "antd";
import React from "react";
import { IoIosSearch } from "react-icons/io";

function NavSearch() {
  return (
    <div className="max-w-[646px] w-full relative">
      <Input
        placeholder="Search For anything"
        className=" w-full bg-[#FFFFFF] !h-[48px] rounded-[1px] !outline-none"
        style={{ outline: "none" }}
      />
      <IoIosSearch className="text-[#191C1F] text-[25px] absolute top-3 right-5" />
    </div>
  );
}

export default NavSearch;
