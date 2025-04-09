import React, { useEffect } from "react";
import { useUser } from "../../context/context";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/api";
import { Link } from "react-router";

import { HiOutlineComputerDesktop } from "react-icons/hi2";

function Categories() {
  const { productCategories } = useUser();
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60,
  });
  console.log(categories?.data?.data?.data, "categories");
  return (
    <div className="w-full flex items-center justify-center mt-[25px] flex-col">
      <div className="max-w-[1320px] w-full text-start text-[30px] font-medium text-gray-500">
        Shop With Categories
      </div>
      <div className="max-w-[1320px] w-full grid grid-cols-6 gap-3 ">
        {categories?.data?.data?.data?.slice(0, 6)?.map((element, idx) => {
          return (
            <div
              key={element?.id}
              className="border-[1px] hover:shadow-xl delay-100 transition-colors duration-150 border-gray-200 hover:border-gray-400 rounded-[5px] cursor-pointer text-center flex flex-col items-center justify-center p-4"
            >
              <Link
                to={`/product_listing/?categoryId=${element?.id}`}
                className="flex flex-col items-center"
              >
                <div>
                  {/* <img  /> */}
                  <HiOutlineComputerDesktop />
                </div>
                <p className="text-[20px] font-medium text-gray-600">
                  {element?.category_name?.charAt(0)?.toUpperCase() +
                    element?.category_name?.slice(1)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
