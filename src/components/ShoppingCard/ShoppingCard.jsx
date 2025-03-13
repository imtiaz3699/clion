import React from "react";
import { Table } from "antd";
import { CloseIcon, MinusIcon, PlusIcon } from "../Icons/Icons";
import { useUserContext } from "../../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItemQuantity } from "../../redux/cartReducer";
import { REMOVE_FROM_CART, UPDATE_CART } from "../../api/cartApi";
import { useMutation } from "@tanstack/react-query";

function ShoppingCard({ data }) {
  const { user } = useUserContext();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const removeProductMutation = useMutation((id) => REMOVE_FROM_CART(id), {
    onSuccess: async (data, variables) => {
      if (data?.status === 200) {
        dispatch(removeItem(variables));
      }
    },
  });
  const handleQuantityChange = async (value, decrement) => {
    const quantity = decrement
      ? value?.quantity === 0
        ? value?.quantity
        : value?.quantity - 1
      : value?.quantity + 1;
    const payload = {
      userId: user.id,
      productId: value?.productId,
      quantity: quantity,
    };
    if (decrement) {
      dispatch(
        updateItemQuantity({
          id: value?.key,
          quantity: quantity,
        })
      );
      const res = await UPDATE_CART(value?.key, payload);
      console.log(res, decrement, "ResponsibleForNexGEne");
    } else {
      dispatch(
        updateItemQuantity({
          id: value?.key,
          quantity: quantity,
        })
      );
      const res = await UPDATE_CART(value?.key, payload);
    }
  };
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      width: "25%",
      render: (_, text) => (
        <div className="flex flex-row items-center gap-[5px]">
          <button onClick={() => removeProductMutation.mutate(text?.key)}>
            <CloseIcon className="text-[20px] text-[#929FA5]" />
          </button>
          <div className="flex flex-row items-center gap-2">{text?.name} </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "25%",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: "25%",
      render: (_, text) => (
        <div className="flex flex-row items-center gap-[5px]">
          <div className="max-w-[164px] w-full flex flex-row items-center h-[56px] justify-between p-4 border-[1px] border-gray-300 rounded-[5px]">
            <div onClick={() => handleQuantityChange(text, true)}>
              <MinusIcon className="cursor-pointer" />
            </div>
            <input
              value={text?.quantity ?? 0}
              className="w-full text-center outline-none"
              onChange={() => handleQuantityChange(text)}
            />
            <div onClick={() => handleQuantityChange(text)}>
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
  return (
    <div className="border-[1px] border-gray-200  py-[20px] flex flex-col gap-[20px]">
      <p className="font-bold text-[18px] text-gray-700 px-6 ">Shopping Cart</p>
      <Table
        loading={removeProductMutation?.isLoading}
        columns={columns}
        dataSource={datas}
        pagination={false}
      />
    </div>
  );
}

export default ShoppingCard;
