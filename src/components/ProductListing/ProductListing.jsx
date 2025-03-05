import React, { Fragment, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setCurrentPage, setLimit } from "../../redux/productReducer";
function ProductListing() {
  const dispatch = useDispatch();
  const [showFunctionality, setShowFunctionality] = React.useState("");
  const {products,loading,error} = useSelector((state) => state.productReducer);
  const handleFunctionality = (id) => {
    if (id === showFunctionality) {
      setShowFunctionality("");
    } else {
      setShowFunctionality(id);
    }
  };
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts(1,1000,"",19));
    }
  }, [dispatch, products.length]);
  return (
    <div className=" w-full flex items-center justify-center  mt-[60px]">
      <div className="grid grid-cols-5 max-w-[1320px] w-full  gap-[16px]">
        {products?.products?.map((product) => {
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
