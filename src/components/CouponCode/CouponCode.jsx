import { Button, Divider, Input } from "antd";
import React from "react";

function CouponCode() {
  return (
    <div className="border-[1px] max-w-[424px] py-5">
      <p className="font-medium text-gray-700 text-[20px] px-6 ">Coupon Code</p>
      <Divider />
      <div className="w-full flex flex-col gap-[16px] px-[24px]">
        <Input placeholder="Coupon code...." className="!h-[44px]" />
        <Button className="bg-[#2DA5F3] text-white !h-[48px] !w-[159px] font-medium">
          APPLY COUPON
        </Button>
      </div>
    </div>
  );
}

export default CouponCode;
