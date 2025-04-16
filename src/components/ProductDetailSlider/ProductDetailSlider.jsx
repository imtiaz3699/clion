import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ProductDetailSlider({ images, onClick }) {
  return (
    <div className = 'flex flex-row items-center  gap-5'>
      {images?.map((element, idx) => {
        return (
          <div key={element} className="   " onClick={onClick}>
            <div className=" w-[96px] h-[96px]">
              {" "}
              <img src={element} className="object-cover w-full h-full" />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailSlider;
