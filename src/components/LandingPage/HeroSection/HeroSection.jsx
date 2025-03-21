import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "../../../api/api";
function HeroSection() {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  const banner = useQuery({ queryKey: ["banner"], queryFn: getBanner });
  console.log(banner?.data?.data?.data[0]?.product, "bannerBnaed");
  let img = [];
  const imagesss = banner?.data?.data?.data?.forEach((element) =>
    element?.product?.map((item) =>
      item.product_img?.map((prIgm) => img.push(prIgm))
    )
  );
  console.log(img, "imageflajsdhfkjad");
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-full">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {img?.map((src, index) => (
            <SwiperSlide key={index}>
              {console.log(src, "SRC ConTRoller")}
              <div className="relative w-full h-[700px] flex justify-center">
                <img src={src} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;
