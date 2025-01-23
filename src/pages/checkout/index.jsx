import React from "react";
import LabelInput from "../../components/sharedComponents/LabelInput/LabelInput";
import { Button, Divider, Input } from "antd";
import { RightArrowIcon } from "../../components/Icons/Icons";

function Checkout() {
  return (
    <div className="flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full flex flex-row items-start justify-between gap-[24px]">
        <div className="max-w-[872px] w-full flex flex-col gap-5">
          <h1 className="text-[18px] font-medium text-gray-800">
            Billing Information
          </h1>
          <div className="flex flex-row items-center gap-5  w-full">
            <LabelInput label="First Name" placeholder="First name" />
            <LabelInput label="First Name" placeholder="First name" />
          </div>
          <div className="flex flex-row items-center gap-5  w-full">
            <LabelInput label="Email" placeholder="Email" />
            <LabelInput label="Phone" placeholder="Phone" />
          </div>
          <div className="w-full flex flex-col gap-[2px] ">
            <label className="text-gray-500">Address</label>
            <Input.TextArea cols={10} rows={10} />
          </div>
          {/* <div className="flex "></div> */}
        </div>
        <div className="max-w-[424px] w-full border-[1px] flex flex-col gap-2 border-gray-200 px-[24px] py-[20px]">
          <p className="">Order Summary</p>
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
          <div className="flex flex-col gap-[24px]">
            {" "}
            <div className="w-full flex flex-row items-center justify-between">
              <p className="text-gray-500">Total</p>
              <p className="text-gray-800 font-medium">$357.99 USD</p>
            </div>
            <Button
              className="!h-[56px] text-[18px] font-medium w-full"
              icon={<RightArrowIcon />}
              iconPosition="end"
              type="primary">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
