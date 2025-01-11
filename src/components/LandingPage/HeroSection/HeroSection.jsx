import React from "react";
import HeroSlider from "./HeroSlider";

function HeroSection() {
  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="max-w-[1320px] h-[520px]  w-full flex flex-row items-center justify-between gap-[24px]">
        <div className="w-[872px] bg-gray-200 h-[520px] rounded-[6px] px-[54px]">
          <HeroSlider />
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-[5px] h-[248px] bg-red-500 w-[424px]">
            One{" "}
          </div>
          <div className="rounded-[5px] h-[248px] bg-green-500 w-[424px]">
            Two
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
