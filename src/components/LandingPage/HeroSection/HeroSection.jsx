import React from "react";
import HeroSlider from "./HeroSlider";

import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { Carousel } from "antd";
function HeroSection() {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className=" flex items-center justify-center w-full">
      <Carousel autoplay className="  h-[500px] bg-red-500 max-w-[1320px] w-full ">
        <div className = 'h-[500px] w-full'>
            <img src = '/Image1.jpg' className = 'w-full h-full object-cover'/>fdasfasdf
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
