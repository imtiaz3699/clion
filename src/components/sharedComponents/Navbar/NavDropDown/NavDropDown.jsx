import React from "react";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";

import { MdKeyboardArrowDown } from "react-icons/md";
const styles = "text-gray-500 hover:text-gray-900 font-medium";
function NavDropDown() {
  const items = [
    { key: "2", label: <p className={styles}>Computer & Laptop</p> },
    { key: "3", label: <p className={styles}> Computer Accessories</p> },
    { key: "4", label: <p className={styles}>Headphones</p> },
    { key: "5", label: <p className={styles}>Headphone</p> },
    { key: "6", label: <p className={styles}>Mobile Accessories</p> },
    { key: "7", label: <p className={styles}>Gaming Console</p> },
    { key: "8", label: <p className={styles}>Camera & Photo</p> },
    { key: "9", label: <p className={styles}>TV & Homes Appliances</p> },
    { key: "10", label: <p className={styles}>Watches & Accessories</p> },
    {
      key: "11",
      label: <p className={styles}>GPS & Navigation</p>,
    //   children: [
    //     { key: "11-1", label: "GPS Devices" },
    //     { key: "11-2", label: "Car Navigation Systems" },
    //     {
    //       key: "11-3",
    //       label: <p className={styles}>Handheld GPS</p>,
    //       children: [{ key: "11-3-1", label: "Wow " }],
    //     },
    //   ],
    },
    { key: "12", label: <p className={styles}>Wearable Technology</p> },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items, // Pass the menu items here
          onClick: (info) => {
            console.log("Clicked item:", info.key);
          },
        }}
        trigger={["hover"]}
        placement="bottomLeft"
        arrow
      >
        <Space className="w-[155px] h-[48px] bg-[#F2F4F5] flex items-center justify-center text-gray-900 font-medium hover:bg-[#FA8232] delay-100 transition-all cursor-pointer hover:text-white">
          Hover me
          <MdKeyboardArrowDown className="text-[20px] font-medium" />
        </Space>
      </Dropdown>

      {/* <Dropdown
      menu={{items}}
      iconPosition="end"
      arrow={true} overlayClassName="text-red-500">
      <Space className="w-[155px] h-[48px] bg-[#F2F4F5] flex items-center justify-center text-gray-900 font-medium hover:bg-[#FA8232] delay-100 transition-all cursor-pointer hover:text-white">
        Hover me
        <MdKeyboardArrowDown className="text-[20px] font-medium" />
      </Space>
    </Dropdown> */}
    </>
  );
}

export default NavDropDown;
