import React, { Fragment } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useUser } from "../../context/context";

function ProductListing() {
  const { jsonProducts } = useUser();
  const [showFunctionality, setShowFunctionality] = React.useState("");
  const handleFunctionality = (id) => {
    if (id === showFunctionality) {
      setShowFunctionality("");
    } else {
      setShowFunctionality(id);
    }
  };
  return (
    <div className=" w-full flex items-center justify-center  mt-[60px]">
      <div className="grid grid-cols-5 max-w-[1320px] w-full  gap-[16px]">
        {jsonProducts?.data?.products?.map((product) => {
          return (
            <Fragment key={product?.id}>
              <ProductCard
                product={product}
                showFunction={true}
                showFunctionality={showFunctionality}
                handleFunctionality={handleFunctionality}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
