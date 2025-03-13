import React from "react";
import LabelInput from "../../components/sharedComponents/LabelInput/LabelInput";
import { Button, Divider, Input } from "antd";
import { RightArrowIcon } from "../../components/Icons/Icons";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      apartment: "",
      city: "",
      postal_code: "",
      phone: "",
      payment_method: "",
    },
  });

  return (
    <div className="flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full flex flex-row items-start justify-between gap-[24px]">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="max-w-[872px] w-full flex flex-col gap-5">
            <p className="text-[18px] font-medium text-gray-800">Contact</p>
            <div className="w-full">
              <InputWithLabel
                label="Email"
                placeholder="Enter your email...."
                name="email"
                value={formik.email}
                onChange={formik.handleChange}
              />
            </div>
            <p className="text-[18px] font-medium text-gray-800">Delivery</p>
            <div className="flex flex-row items-center gap-5  w-full">
              <InputWithLabel
                label="First Name"
                placeholder="First name"
                name="first_name"
                value={formik.first_name}
                onChange={formik.handleChange}
              />
              <InputWithLabel
                label="Last name"
                placeholder="Last name"
                name="last_name"
                value={formik.last_name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-[2px] ">
              <InputWithLabel
                label="Address"
                placeholder="Address"
                name="address"
                value={formik.address}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-[2px] ">
              <InputWithLabel
                label="Apartment"
                placeholder="Apartment, suite,etc (optional)"
                name="apartment"
                value={formik.apartment}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-row items-center gap-5  w-full">
              <InputWithLabel
                label="City"
                placeholder="City"
                name="city"
                value={formik.city}
                onChange={formik.handleChange}
              />
              <InputWithLabel
                label="Postal code"
                placeholder="Postal code"
                name="postal_code"
                value={formik.postal_code}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-row items-center gap-5  w-full">
              <InputWithLabel
                label="Phone"
                placeholder="Phone"
                name="phone"
                value={formik.phone}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-medium text-gray-800">
                Shipping method
              </p>
              <div className="bg-[#F6F6F6] rounded-lg p-5 w-full border-[1px] border-gray-900 text-gray-900 ">
                Standard
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[18px] font-medium text-gray-800">
                Payment method
              </p>
              <div className="bg-[#F6F6F6] rounded-lg p-5 w-full border-[1px] border-gray-900 text-gray-900 ">
                Cash on delivery
              </div>
            </div>
            <div className = 'flex items-end justify-end w-full'>
            <Button icon = {<RightArrowIcon/>} iconPosition="end" htmlType="submitem" type="primary" className = '!h-[50px] !w-[200px] font-medium'>
                Complete order
            </Button>
            </div>
          </div>
        </form>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
