import { Button, Divider, Image } from "antd";
import React from "react";
import { RightArrowIcon } from "../Icons/Icons";
import { useSelector } from "react-redux";
import CouponCode from "../CouponCode/CouponCode";
import { useLocation, useNavigate } from "react-router";

function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(cart?.items, "fadlfCart");
  return (
    <div className="max-w-[424px] w-full flex flex-col gap-6">
      <div className="max-w-[424px] w-full px-6 py-5 border-[1px] border-gray-300 flex flex-col gap-[20px]">
        <p className="font-medium text-gray-700 text-[20px]">Cart Totals</p>
        <div className="flex flex-col gap-[12px] w-full text-[14px]">
          {location.pathname === "/checkout" && (
            <div className="flex flex-col gap-5 w-full">
              {cart?.items?.map((element, idx) => {
                console.log(element?.product?.product_img[0], "fadslfjskda");
                return (
                  <div className="flex flex-row items-start gap-2 justify-between">
                    <div className="flex flex-row items-start gap-3">
                      <div className="w-[80px] h-[50px]   relative">
                        <Image
                          src={element?.product?.product_img[0]}
                          className="w-[80px] h-[50px] border-[2px] border-gray-300 rounded-[5px] overflow-hidden object-cover"
                        />
                        <p className="bg-[#FA8232] text-white text-[10px] rounded-full w-[20px] h-[20px] absolute z-50 -top-2 flex items-center justify-center right-0">
                          {element?.quantity}
                        </p>
                      </div>
                      <p>{element?.product?.product_name}</p>
                    </div>
                    <p>{element?.product?.price}</p>
                  </div>
                );
              })}
            </div>
          )}
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-gray-400">Sub-total</p>
            <p className="text-gray-700">{cart?.totalAmount} PKR</p>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-gray-400">Shipping</p>
            <p className="text-gray-700">200 PKR</p>
          </div>
        </div>
        <Divider />
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-gray-500">Total</p>
          <p className="text-gray-800 font-medium">
            {cart?.totalAmount + 200} PKR
          </p>
        </div>
        {location.pathname === "/cart" && (
          <Button
            onClick={() => {
              navigate("/checkout");
            }}
            className="!h-[56px] text-[18px] font-medium"
            icon={<RightArrowIcon />}
            iconPosition="end"
            type="primary"
          >
            Place order
          </Button>
        )}
      </div>
      {/* <CouponCode /> */}
    </div>
  );
}

export default OrderSummary;
