import React, { Fragment, useEffect, useRef, useState } from "react";
import { useUser } from "../../context/context";
import ListingFilter from "./ListingFilter";
import ProductCard from "../ProductCard/ProductCard";
import { Pagination, Spin } from "antd";
import { useSearchParams } from "react-router";
import { getProductsByCategory } from "../../api/api";

function Listing() {
  const { jsonProducts } = useUser();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId") ?? "";
  const loaderRef = useRef(null);
  const fetchList = async () => {
    setIsLoading(true);
    try {
      const res = await getProductsByCategory(page, limit, categoryId, search);
      if (res?.status === 200) {
        if (res?.data?.data?.products?.length === 0) {
          setHasMore(false);
          setIsLoading(false);
        } else {
          setData((prev) => [...prev, ...res?.data?.data?.products]);
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    fetchList();
  }, [categoryId, page, limit, search]);
  useEffect(() => {
    if (hasMore) {
      fetchList();
    }
  }, [page]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef, hasMore]);
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <ListingFilter search={search} setSearch={setSearch} />
      <div className="grid grid-cols-6 w-full gap-[10px]">
        {data?.map((product) => (
          <Fragment key={product?.id}>
            <ProductCard product={product} />
          </Fragment>
        ))}
      </div>
      {isLoading && (
        <div className="flex justify-center items-center gap-5 text-[16px] text-[#FA8232]">
          {" "}
          <Spin size="large" /> Loading....{" "}
        </div>
      )}
      {!hasMore && (
        <p className="text-center w-full">No more products to load</p>
      )}
      <div ref={loaderRef} style={{ height: "100px" }} />
    </div>
  );
}

export default Listing;
