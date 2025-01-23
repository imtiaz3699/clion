import React from "react";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import { Button, Divider } from "antd";
import { RightArrowIcon } from "../../components/Icons/Icons";
import CouponCode from "../../components/CouponCode/CouponCode";

function Cart() {
  return (
    <div className="w-full flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full flex flex-row items-start gap-[24px]">
        <div className="max-w-[872px] w-full ">
          <ShoppingCard />
        </div>
        <div className="max-w-[424px] w-full flex flex-col gap-6">
          <div className="max-w-[424px] w-full px-6 py-5 border-[1px] border-gray-300 flex flex-col gap-[20px]">
            <p className="font-medium text-gray-700 text-[20px]">Card Totals</p>
            <div className="flex flex-col gap-[12px] w-full text-[14px]">
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-gray-400">Sub-total</p>
                <p className="text-gray-700">$300</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-gray-400">Shipping</p>
                <p className="text-gray-700">$300</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-gray-400">Discount</p>
                <p className="text-gray-700">$300</p>
              </div>
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-gray-400">Tax</p>
                <p className="text-gray-700">$300</p>
              </div>
            </div>
            <Divider />
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-gray-500">Total</p>
              <p className="text-gray-800 font-medium">$357.99 USD</p>
            </div>
            <Button
              className="!h-[56px] text-[18px] font-medium"
              icon={<RightArrowIcon />}
              iconPosition="end"
              type="primary"
            >
              Place Order
            </Button>
          </div>
          <CouponCode />
        </div>
      </div>
    </div>
  );
}

export default Cart;
