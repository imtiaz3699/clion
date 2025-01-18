import React, { createContext, useState, useContext } from "react";
import { Divider, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  handleOpenModal,
  handleModalClose,
} from "../redux/productDetailReducer";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "../components/sharedComponents/Rating/Rating";
import CustomSelect from "../components/sharedComponents/Select/CustomSelect";
import CheckoutButtons from "../components/CheckoutButtons/CheckoutButtons";
import ShareButtons from "../components/ShareButtons/ShareButtons";
import ProductDetailSlider from "../components/ProductDetailSlider/ProductDetailSlider";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const isModalOpen = useSelector((state) => state.productDetail.isModalOpen);
  const productData = useSelector((state) => state.productDetail.productData);
  console.log(productData, "flasdfhlaksdjfhasd986786");
  const dispatch = useDispatch();
  const opt = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <ModalContext.Provider value={{ handleOpenModal, handleModalClose }}>
      {children}
      <div className="productDetailModal">
        <Modal
          open={isModalOpen}
          closable={false}
          footer={null}
          className="!max-w-[1400px] !w-full relative !py-[30px]"
          centered
        >
          <div onClick = {()=> dispatch(handleModalClose())}  className="absolute cursor-pointer -right-[60px] z-10 top-0 w-[48px] h-[48px] rounded-full bg-gray-900 flex items-center justify-center">
            <IoCloseSharp className="text-white"/>
          </div>
          <div className=" flex flex-row items-start w-full gap-[56px] !py-[30px] !px-[30px] ">
            <div className="flex flex-col items-center gap-6    w-full ">
              <div className=" border-[1px] border-gray-200 max-w-[616px] w-full max-h-[464px] h-full flex items-center justify-center overflow-hidden">
                <img src = {productData && productData?.images[0]} className = 'bg-contain w-full h-full'/>
              </div>
              <div className="max-w-[616px] w-full h-[100px] flex items-center justify-center ">
               {
                productData?.images?.length > 0 && <ProductDetailSlider images = {productData?.images} />
               } 
              </div>
            </div>
            <div className="flex flex-col items-start  max-w-[648px] w-full">
              <Rating value={2.8} />
              <p className="text-[18px] text-gray-800 font-medium mt-[8px]">
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </p>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-[8px] max-w-[312px] w-full mt-[16px]">
                  <p className="text-[14px] text-gray-500 font-medium">
                    {" "}
                    SKU: <span className="text-gray-900">A264671</span>{" "}
                  </p>
                  <p className="text-[14px] text-gray-500 font-medium">
                    Brand: <span className="text-gray-900">Apple</span>
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] max-w-[312px] w-full">
                  <p className="text-[14px] text-gray-500 font-medium">
                    {" "}
                    Availability:{" "}
                    <span className="text-green-500">In Stock</span>{" "}
                  </p>
                  <p className="text-[14px] text-gray-500 font-medium">
                    Category{" "}
                    <span className="text-gray-900">Electronic Devices</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-[12px] mt-[24px]">
                <span className="text-sky-500 font-bold text-[18px]">
                  &1699
                </span>
                <span className="text-[18px] font-medium text-gray-500">
                  $1999.00
                </span>
                <span className="text-gray-900 bg-[#EFD33D] py-[5px] px-[10px] text-[16px] font-medium ">
                  21% OFF
                </span>
              </div>
              <Divider />
              <div className="grid grid-cols-2 gap-[16px] w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] text-gray-900 font-medium">Color</p>
                  <div className="flex flex-row items-center gap-[10px]">
                    <div className="w-[44px] h-[44px] rounded-full bg-white border-[2px] border-[#FA8232] flex items-center justify-center">
                      <div className="w-[32px] h-[32px] bg-[#B1B5B8] rounded-full"></div>
                    </div>
                    <div className="w-[44px] h-[44px] rounded-full bg-white  flex items-center justify-center">
                      <div className="w-[32px] h-[32px] bg-[#B1B5B8] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <CustomSelect
                  options={opt}
                  onChange={handleChange}
                  defaultValue={opt[0].value}
                  label="Size"
                />
                <CustomSelect
                  options={opt}
                  onChange={handleChange}
                  defaultValue={opt[0].value}
                  label="Memory"
                />
                <CustomSelect
                  options={opt}
                  onChange={handleChange}
                  defaultValue={opt[0].value}
                  label="Storage"
                />
              </div>
              <div className="mt-[36px] w-full ">
                <CheckoutButtons />
              </div>
              <div className="mt-[24px] w-full">
                <ShareButtons />
              </div>
            </div>
          </div>
          
        </Modal>
      </div>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
