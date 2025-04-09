import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

function ProductCard({ product, showFunction = false }) {
  return (
    <div className="w-full max-w-[248px] hover:shadow-xl h-full min-h-[296px] p-3 relative border-[1px] border-gray-200">
      <div className="h-[188px] w-full relative">
        <img
          src={product?.product_img?.[0]}
          className="w-full h-full object-contain"
        />
      </div>
      {showFunction && (
        <div className="flex flex-row items-center text-[14px] text-gray-500 ">
          {Array(5)
            .fill(0)
            .map((element, idx) => {
              return (
                <FaStar className="text-[#EBC80C] text-[14px] " key={idx} />
              );
            })}
          <span className="ml-2">(55,777)</span>
        </div>
      )}
      <div className="flex flex-col gap-2  w-full">
        <p className="text-[14px] font-medium text-gray-900 w-full">
          {product?.product_description?.slice(0, 300)}...
        </p>
        <p className="text-[#2DA5F3] text-[18px] font-medium">
          Rs.{product?.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
