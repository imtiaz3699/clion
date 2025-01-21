import { Divider } from "antd";
import React from "react";

function ProductListingSidebar() {
  const sidebarData = [
    "Electronic Devices",
    "Computer & Laptops",
    "Computer Accessories",
    "Smart Phone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
  ];
  return (
    <div className="max-w-[312px] w-full sticky top-0">
      <p className = 'text-[#191C1F] text-[18px] font-medium'>Category</p>
      <div className="flex flex-col gap-[10px] mt-[16px]">
        {sidebarData?.map((element, idx) => {
          return (
            <div key={element} className="flex flex-row items-center gap-[8px] text-[#475156]">
              {" "}
              <div className="bg-[#FA8232] w-[20px] h-[20px] rounded-full flex items-center justify-center">
                <div className="w-[8px] h-[8px] bg-white rounded-full "></div>
              </div>{" "}
              <p> {element}</p>
            </div>
          );
        })}
      </div>
      <Divider/>
    </div>
  );
}

export default ProductListingSidebar;
