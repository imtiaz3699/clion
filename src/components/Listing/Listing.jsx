import React,{Fragment} from "react";
import { useUser } from "../../context/context";
import ListingFilter from "./ListingFilter";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination } from "antd";

function Listing() {
  const {jsonProducts} = useUser();
  console.log(jsonProducts,'ProductListingJson')
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <ListingFilter />
      <div className="grid grid-cols-4 w-full gap-[16px]">
        {jsonProducts?.data?.products?.map((product) => (
          <Fragment key={product?.id}>
            <ProductCard
              product={product}
              // showFunction={true}
              // showFunctionality={showFunctionality}
              // handleFunctionality={handleFunctionality} 

              />
          </Fragment>
        ))}
      </div>
      <div className = 'flex items-center justify-center w-full'>
      <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default Listing;
