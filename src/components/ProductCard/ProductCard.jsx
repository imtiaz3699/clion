import React from "react";

function ProductCard({ product }) {
  return (
    <div className="w-full max-w-[248px] h-full min-h-[296px] p-4 relative border-[1px] border-gray-200">
      <div className="h-[188px] w-full">
        <img
          src={product?.images[0]}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        <p className="text-[14px] font-medium text-gray-900 w-full">
          {product?.title}
        </p>
        <p className="text-[#2DA5F3] text-[18px] font-medium">$2,300</p>
      </div>
      <div className="absolute w-[80px] rounded-[2px] bg-gray-500 text-[14px] text-center font-medium top-2 left-2 text-white ">
        SOLD OUT
      </div>
    </div>
  );
}

export default ProductCard;
