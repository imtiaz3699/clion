import React from "react";
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { Button } from "antd";
import { FiEye } from "react-icons/fi";
import ProductCard from "../ProductCard/ProductCard";
import { Fragment } from "react";

function ProductCardBestDeals({ products, jsonProducts }) {
  console.log(jsonProducts?.data?.products, "faslfjhalskdfjhalsjkdfhlkasdjh");
  return (
    <div className="flex flex-row items-start border-[1px] border-gray-200">
      <div className="relative max-w-[328px] w-full  p-6 rounded-[5px]">
        <div className="max-w-[268px] w-full h-[280px]">
          <img
            src={jsonProducts?.data?.products[0]?.images[0]}
            className="w-full h-full"
            alt={products?.data?.[0]?.alt}
          />
        </div>
        <div className="mt-[24px]">
          <div className="flex flex-row items-center text-[14px] text-gray-500 ">
            {Array(5)
              .fill(0)
              .map((element, idx) => {
                return (
                  <FaStar className="text-[#EBC80C] text-[18px] " key={idx} />
                );
              })}
            <span className="ml-2">(55,777)</span>
          </div>
          <p className="mt-[6px] text-[20px] font-medium">
            {jsonProducts?.data?.products?.[0]?.title}
          </p>
          <div className="flex flex-row items-center gap-[6px] text-[18px] font-medium mt-[12px]">
            <p className="line-through text-gray-400 ">
              {jsonProducts?.data?.products?.[0]?.discountPercentage}
            </p>
            <p className="text-[#2DA5F3]">
              {jsonProducts?.data?.products?.[0]?.price}
            </p>
          </div>
          <p className="text-[18px] text-gray-500 font-medium mt-[12px]">
            {jsonProducts?.data?.products?.[0]?.description?.slice(0, 50)}
          </p>
          <div className="mt-6 flex flex-row items-center gap-[8px]">
            <div className="bg-[#FFE7D6] w-[48px] h-[48px] flex items-center justify-center">
              <LuHeart className="text-[18px] " />
            </div>
            <Button
              icon={<BsCart2 className="text-[18px]" />}
              iconPosition="start"
              className="bg-[#FA8232] text-white !h-[48px] rounded-[2px] text-[20px] font-medium"
            >
              Add To Cart
            </Button>
            <div className="bg-[#FFE7D6] w-[48px] h-[48px] flex items-center justify-center">
              <FiEye className="text-[18px]" />
            </div>
          </div>
        </div>
        <div className="absolute left-2 top-2 gap-[8px] flex flex-col items-start font-medium text-[16px]">
          <div className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[5px] ">
            32% OFF
          </div>
          <div className="bg-[#EE5858] px-[10px] py-[5px] rounded-[5px] ">
            HOT
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full">
        {jsonProducts?.data?.products?.slice(1, 10)?.map((element, idx) => {
          if (idx > 0) {
            return (
              <Fragment key={element?.id}>
                {" "}
                <ProductCard product={element} />
              </Fragment>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProductCardBestDeals;
