import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ProductDetailSlider({ images }) {
  return (
    <Swiper
      slidesPerView={3} // Show 3 slides at a time
      navigation={true} // Enable navigation
      spaceBetween={20} // Add space between slides
      modules={[Navigation]} // Import Navigation module
      className="mySwiper flex items-center justify-center"
    >
      {images?.map((element, idx) => {
        return (
          <SwiperSlide
            key={element}
            className="flex items-center justify-center  w-[96px] h-[96px]"
          >
            <div className="border-[1px] border-gray-300 w-[96px] h-[96px]">
              {" "}
            <img src={element} />{" "}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductDetailSlider;
