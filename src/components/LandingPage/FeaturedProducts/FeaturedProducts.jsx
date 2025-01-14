import { Button } from "antd";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { useUser } from "../../../context/context";
import ProductCard from "../../ProductCard/ProductCard";

function FeaturedProducts() {
  const { jsonProducts } = useUser();
  const [showFunctionality, setShowFunctionality] = React.useState('');
  console.log(jsonProducts, "JsonProductsRating");
  const handleFunctionality = (id) => {
    if(id === showFunctionality) {
        setShowFunctionality('')
    } else {
        setShowFunctionality(id);
    }
    
  };
  return (
    <div className="flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full flex flex-row items-start gap-6">
        <div className="h-[716px] h-full bg-[#F3DE6D] max-w-[312px] flex flex-col items-center   w-full pt-[32px]">
          <p className="text-[#BE4646] text-[14px]">COMPUTER & ACCESSORIES</p>
          <p className="text-[20px] font-medium text-gray-900 mt-[8px]">
            32% Discount
          </p>
          <p className="text-[14px] font-normal text-gray-600 mt-[12px]">
            For all electronics products
          </p>
          <p className="flex items-center gap-1 text-[14px] font-normal mt-[16px]">
            Off ends in:{" "}
            <span className="py-[6px] px-[12px] bg-white text-[14px]">
              ENDS OF CHRISTMAS
            </span>
          </p>
          <Button
            className="mt-[24px] !h-[56px] !w-[191px] text-[18px] font-medium"
            icon={<FaArrowRight />}
            iconPosition="end"
            type="primary"
          >
            Shop Now
          </Button>
          <div className="flex flex-col items-end justify-end h-full">
            <img src="/techproduct.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[25px] font-medium text-gray-800">
              Featured Products
            </p>
            <p className="text-[#FA8232]  text-[20px] font-medium flex  items-center gap-2 hover:text-[#f19252] cursor-pointer">
              Browse All Products <FaArrowRightLong />{" "}
            </p>
          </div>

          <div className="grid grid-cols-4 w-full gap-[16px]">
            {jsonProducts?.data?.products?.slice(0, 8)?.map((product) => {
              return (
                <Fragment key={product?.id}>
                  <ProductCard product={product} showFunction={true} showFunctionality={showFunctionality} handleFunctionality={handleFunctionality} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
