import React from "react";
import { Button, Space, Table, Tag } from "antd";
import { CartIcon, CloseIcon, MinusIcon, PlusIcon } from "../Icons/Icons";

function ShoppingCard() {
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      width: "25%", // Equal width
      render: (text) => (
        <div className="flex flex-row items-center gap-[5px]">
          <button>
            <CloseIcon className="text-[20px] text-[#929FA5]" />
          </button>
          <div className="flex flex-row items-center gap-2">
            <img src="/CreditCard.png" className="w-[72px] h-[72px]" /> {text}{" "}
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "age",
      key: "age",
      width: "25%", // Equal width
    },
    {
      title: "Quantity",
      dataIndex: "address",
      key: "address",
      width: "25%",
      render: () => (
        <div className="flex flex-row items-center gap-[5px]">
          <div className="max-w-[164px] w-full flex flex-row items-center h-[56px] justify-between p-4 border-[1px] border-gray-300 rounded-[5px]">
            <MinusIcon />
            <input value="0" className="w-[20px] outline-none" />
            <PlusIcon />
          </div>
        </div>
      ),
    },
    {
      title: "SUB-TOTAL",
      key: "action",
      width: "25%", // Equal width
      render: (_, record) => (
        <div>$70</div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];
  return (
    <div className="border-[1px] border-gray-200  py-[20px] flex flex-col gap-[20px]">
      <p className="font-bold text-[18px] text-gray-700 px-6 ">Shopping Card</p>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default ShoppingCard;
