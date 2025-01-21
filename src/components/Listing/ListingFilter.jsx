import { Input } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Space, theme } from "antd";
import { IoIosClose } from "react-icons/io";

const { useToken } = theme;

function ListingFilter() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
  ];
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorderSecondary}`,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex flex-row items-center justify-between">
        <Input.Search
          placeholder="Search"
          className="w-full max-w-[424px] !h-[59px] !outline-none !border-gray-300"
          style={{ outline: "none" }}
        />
        <div className="text-gray-600 font-medium text-[16px] flex flex-row items-center gap-[20px]">
          {" "}
          <p> Sort By</p>
          <Dropdown
            menu={{
              items,
            }}
            className="border-[1px] border-gray-300 px-4 py-[8px] text-[14px]"
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu, {
                  style: menuStyle,
                })}
                <Divider
                  style={{
                    margin: 0,
                  }}
                />
                <Space
                  style={{
                    padding: 8,
                  }}
                >
                  <Button type="primary">Click me!</Button>
                </Space>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-[44px] bg-[#F2F4F5] px-[24px] font-medium">
        <div className="flex flex-row items-center gap-[16px] text-gray-400 ">
          <p>Active Filters:</p>
          <div className="flex items-center gap-[6px] text-gray-500">
            {" "}
            <p className="text-gray-600"> Electronics</p>{" "}
            <IoIosClose className="cursor-pointer" />{" "}
          </div>
        </div>
        <div className="flex items-center gap-[5px] font-medium">
          <p className="text-gray-900">65,867</p>
          <p className="text-gray-700">Results Found.</p>
        </div>
      </div>
    </div>
  );
}

export default ListingFilter;
