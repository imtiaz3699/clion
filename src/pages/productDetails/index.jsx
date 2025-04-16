import React, { useEffect, useState } from "react";
import { getRequest } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import CheckoutButtons from "../../components/CheckoutButtons/CheckoutButtons";
import ShareButtons from "../../components/ShareButtons/ShareButtons";
import { Divider } from "antd";
import Rating from "../../components/sharedComponents/Rating/Rating";
import ProductDetailSlider from "../../components/ProductDetailSlider/ProductDetailSlider";
import { Delivery } from "../../components/Icons/Icons";
function ProductDetails() {
  const [currentImage,setCurrentImage] = useState("");
  const { id } = useParams();
  const product = useQuery(
    ["singleProduct", id],
    () => getRequest(`/api/product/get-single-product/${id}`),
    {
      staleTime: 1000 * 60 * 60,
    }
  );
  const opt = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const productImages = [
    "/CreditCard.png",
    "/CreditCard.png",
    "/CreditCard.png",
  ];
  useEffect(() => {
    setCurrentImage(product?.data?.data?.product_img[0]);
  }, [product?.data?.data?.product_img]);
  console.log(currentImage,'fadsflaskdjfhlak', "fads35654");
  return (
    <div className="flex items-center justify-center">
      <div className="productDetailModal w-full flex items-center justify-center">
        <div className="!max-w-[1320px] !w-full relative !py-[30px]">
          <div className=" flex flex-row items-start justify-between w-full gap-[56px]  ">
            <div className="flex flex-col items-center gap-6    w-full ">
              {
                currentImage && <div className=" border-[1px] border-gray-200 max-w-[616px] w-full h-[464px]  flex items-center justify-center overflow-hidden">
                <img
                  src={currentImage ?? ""}
                  className="bg-cover w-full h-full"
                />
              </div>
              }
              <div className="max-w-[616px] w-full h-[100px] flex">
                {
                  <ProductDetailSlider
                    onClick = {(image) => setCurrentImage(image.target.src)}
                    images={product?.data?.data?.product_img}
                  />
                }
              </div>
            </div>

            <div className="flex flex-col items-start  max-w-[648px] w-full gap-5">
              <p className="text-[24px] text-gray-800 font-medium ">
                {product?.data?.data?.product_name} || this product is only
                available in pakistan
                {product?.data?.data?.product_description}
              </p>
              <p className="text-[14px] text-gray-500 font-medium">
                {" "}
                SKU:{" "}
                <span className="text-gray-900">
                  {product?.data?.data?.sku ?? "A264671"}
                </span>{" "}
              </p>
              <p className="text-[14px] text-gray-500 font-medium">
                {" "}
                Availability: <span className="text-green-500">
                  In Stock
                </span>{" "}
              </p>
              <p className="text-[14px] text-gray-500 font-medium">
                Category{" "}
                <span className="text-gray-900">
                  {product?.data?.data?.category?.category_name}
                </span>
              </p>
              <div className="flex flex-row items-center gap-[12px] ">
                <p className="flex flex-row items-center gap-[10px]">
                  <span className="text-sky-500 font-bold text-[18px]">
                    Price:
                  </span>
                  <span className="text-[18px] font-medium text-gray-500">
                    {product?.data?.data?.price} PKR
                  </span>
                </p>
              </div>
              <Divider />
              <div className="grid grid-cols-2 gap-[16px] w-full">
                <div className="flex flex-row items-start gap-2">
                  <Delivery className="text-[30px]" />
                  <p className="text-[18px] text-gray-900 font-medium flex flex-col">
                    Cash On Delivery{" "}
                    <span className="text-[16px] text-gray-500">
                      Delivery available in all pakistan
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-[36px] w-full ">
                <CheckoutButtons product = {product?.data?.data} productId = {product?.data?.data?.id} />
              </div>
              <div className="mt-[24px] w-full">
                <ShareButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
