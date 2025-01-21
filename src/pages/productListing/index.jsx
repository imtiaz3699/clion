import React from "react";
import CustomBreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ProductListingSidebar from "../../components/ProductListingSidebar/ProductListingSidebar";
import Listing from "../../components/Listing/Listing";

function ProductListing() {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px] ">
      <div className="bg-[#F2F4F5] h-[72px] w-full flex items-center justify-center">
        <div className="max-w-[1320px] w-full">
          <CustomBreadCrumb />
        </div>
      </div>
      <div className="max-w-[1320px] w-full flex flex-row items-start gap-6 ">
         <ProductListingSidebar/>
         <Listing/> 
      </div>
    </div>
  );
}

export default ProductListing;
