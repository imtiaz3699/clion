import React from "react";
import { Table } from "antd";
import { CloseIcon, MinusIcon, PlusIcon } from "../Icons/Icons";
import { useUserContext } from "../../context/userContext";

function ShoppingCard({ data }) {
  const { user } = useUserContext();
  const handleUpdateProductCart = async (values) => {
    console.log(values, "fadlfjka134");
    // cartId:values?.key,
    const payload = {
      userId: user?.id,
      productId:values?.productId,
      quantity:values?.quantity
    };
    
    console.log(payload,'Payload')
  };
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
          <div className="flex flex-row items-center gap-2">{text} </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "25%", // Equal width
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "25%",
      render: (_, text) => (
        <div className="flex flex-row items-center gap-[5px]">
          <div className="max-w-[164px] w-full flex flex-row items-center h-[56px] justify-between p-4 border-[1px] border-gray-300 rounded-[5px]">
            <MinusIcon onClick={() => handleUpdateProductCart(text)} />
            <input
              value={text?.quantity}
              className="w-full text-center outline-none"
            />
            <div onClick={() => handleUpdateProductCart(text)}>
              <PlusIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "SUB-TOTAL",
      dataIndex: "sub_total",
      key: "sub_total",
      width: "25%", // Equal width
      render: (record) => <div>{record}</div>,
    },
  ];
  const datas = data?.map((element, idx) => ({
    key: element?.id,
    name: element?.product?.product_name,
    price: element?.product?.price,
    quantity: element?.quantity,
    sub_total: element?.quantity * element?.product?.price,
    productId: element?.product?.id,
  }));
  console.log(data, "afdlfjkhasdlkjh");
  return (
    <div className="border-[1px] border-gray-200  py-[20px] flex flex-col gap-[20px]">
      <p className="font-bold text-[18px] text-gray-700 px-6 ">Shopping Card</p>
      <Table columns={columns} dataSource={datas} pagination={false} />
    </div>
  );
}

export default ShoppingCard;
