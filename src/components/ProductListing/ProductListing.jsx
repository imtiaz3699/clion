import React, { Fragment, useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setCurrentPage,
  setLimit,
} from "../../redux/productReducer";
import { Link } from "react-router";
import { Spin } from "antd";
function ProductListing() {
  const dispatch = useDispatch();
  const [showFunctionality, setShowFunctionality] = React.useState("");
  const loaderRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  
  const { products, loading, error, currentPage, pagination } = useSelector(
    (state) => state.productReducer
  );
  const handleFunctionality = (id) => {
    if (id === showFunctionality) {
      setShowFunctionality("");
    } else {
      setShowFunctionality(id);
    }
  };
  const handleLoadData = () => {
    if (currentPage < (pagination?.totalPages && pagination?.totalPages)) {
      console.log(
        currentPage,
        currentPage < pagination?.totalPages,
        "adflasdjfk334356"
      );
      dispatch(setCurrentPage(currentPage + 1));
    } else {
      setHasMore(false);
    }
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [currentPage]);
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          if (pagination.totalPages) {
            handleLoadData();
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [loaderRef, hasMore, currentPage, pagination]);
  console.log(currentPage, pagination, "fadlfhlasdjflsd");

  return (
    <div className=" w-full flex flex-col items-center justify-center mt-[25px]">
      <div className="max-w-[1320px] w-full text-start text-[30px] font-medium text-gray-500">
        Products
      </div>
      {/* <button onClick={handleLoadData}>Click me</button> */}
      <div className="grid grid-cols-5 max-w-[1320px] w-full  gap-[16px]">
        {products?.map((product) => {
          return (
            <Fragment key={product?.id}>
              <Link to={`/product_details/${product?.id}`}>
                <ProductCard
                  product={product}
                  showFunction={true}
                  showFunctionality={showFunctionality}
                  handleFunctionality={handleFunctionality}
                />
              </Link>
            </Fragment>
          );
        })}
      </div>
      {loading && (
        <div className="flex justify-center items-center gap-5 text-[16px] text-[#FA8232]">
          {" "}
          <Spin size="large" /> Loading....{" "}
        </div>
      )}
      {!hasMore && (
        <p className="text-center w-full text-[18px] mt-5">No more products to load....</p>
      )}
      <div ref={loaderRef} style={{ height: "100px" }} />
    </div>
  );
}

export default ProductListing;
