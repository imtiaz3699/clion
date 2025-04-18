import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { Dropdown, Button, List, Divider } from "antd";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import { useUser } from "../../context/context";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeItem } from "../../redux/cartReducer";
import { REMOVE_FROM_CART } from "../../api/cartApi";
import { removeListener } from "@reduxjs/toolkit";
function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { jsonProducts } = useUser();
  const handleRemoveFromCart = async (id) => {
    try {
      const res = await REMOVE_FROM_CART(id);
      if (res?.status === 200) {
        dispatch(removeItem(id));
        console.log(res, "fasdfsda");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const cartItems =
    cart?.items?.length > 0
      ? cart?.items?.slice(0, 3)?.map((element, idx) => ({
          id: element?.id,
          name: element?.product?.product_name,
          price: element?.product?.price,
          quantity: element?.quantity,
          image: element?.product?.product_img[0],
        }))
      : [];
  const shoppingCartContent = (
    <div
      style={{
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white w-[376px] rounded-[20px] "
    >
      <h2 className="px-[24px] pt-[16px] font-medium text-[16px]">
        Shopping Cart{" "}
        <span className="text-gray-400"> ({cart?.items?.length})</span>
      </h2>
      <Divider />
      <div className="px-6">
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="text"
                  icon={<CloseOutlined className="text-gray-[#929FA5]" />}
                  onClick={() => handleRemoveFromCart(item?.id)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <div className="w-[80px] h-[80px] border-[1px] text-[#E4E7E9] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                }
                title={
                  <span className="text-[16px] ml-4 font-medium text-gray-900">
                    {item.name}
                  </span>
                }
                description={
                  <div className="ml-4 font-medium text-[16px]">
                    <span>
                      {item.quantity} x{" "}
                      <b className="text-sky-500">${item.price}</b>
                    </span>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
      <Divider />
      <div className="px-6 flex flex-col gap-[20px] pb-6">
        <div className="flex items-center justify-between w-full ">
          <span className="text-gray-500 text-[14px] font-medium">
            Sub-Total:
          </span>{" "}
          <span className="text-gray-900 text-[14px] font-medium">
            {" "}
            PKR{cart?.totalAmount} USD
          </span>
        </div>
        <Button
          onClick={() => {
            navigate("/checkout");
            setIsOpen(false);
          }}
          type="primary"
          className="!h-[48px]"
          block
          style={{ marginBottom: "10px" }}
        >
          CHECKOUT NOW →
        </Button>
        <Button
          onClick={() => {
            navigate("/cart");
            setIsOpen(false);
          }}
          type="default"
          block
          className="!h-[48px] border-[1x] border-[#FA8232] text-[#FA8232]"
        >
          VIEW CART
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    if (cart?.items?.length === 0) {
      dispatch(getCart(1, 10));
    }
  }, [cart?.items?.length, dispatch]);
  console.log(cart, "fadslfjskda");
  return (
    <div className="flex flex-row items-center gap-[24px]">
      <LuHeart className="text-white text-[20px] hover:text-gray-400 delay-75 cursor-pointer" />
      <Dropdown
        overlay={shoppingCartContent}
        trigger={["click"]}
        open={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <BsCart2
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-[20px] hover:text-gray-400 delay-75 cursor-pointer"
        />
      </Dropdown>
    </div>
  );
}

export default Cart;
