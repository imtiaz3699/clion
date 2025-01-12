import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
import { useUser } from "../../../../context/context";
import ProductCardBestDeals from "../../../ProductCardBestDeals/ProductCardBestDeals";

function BestDeals() {
    const {products,jsonProducts} = useUser()
  return (
    <section className="flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-[24px]">
            <p className="text-[25px] font-bold text-gray-900">Best Deals</p>
            <p className="text-[16px] text-gray-900 font-normal">
              Deals ends in{" "}
            </p>
            <p className="px-[12px] py-[6px] bg-[#F3DE6D] text-[16px] font-medium">
              16d : 21h: 57m : 23s
            </p>
          </div>
          <div className="text-[16px] font-medium text-[#2DA5F3] flex flex-row items-center gap-[12px]">
            {" "}
            Browse All Products <FaLongArrowAltRight />{" "}
          </div>
        </div>
        <div className="mt-6">
          <ProductCardBestDeals products={products} jsonProducts={jsonProducts} />
        </div>
      </div>
    </section>
  );
}

export default BestDeals;
