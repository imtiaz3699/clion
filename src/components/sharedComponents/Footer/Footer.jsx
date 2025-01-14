import React from "react";
import Logo from "../Logo/Logo";

function Footer() {
  const topCat = [
    { name: "Computer & Laptop", url: "" },
    { name: "SmartPhone", url: "" },
    { name: "Headphone", url: "" },
    { name: "Accessories", url: "" },
    { name: "Camera & Photo", url: "" },
    { name: "TV & Homes", url: "" },
  ];
  const quickLinks = [
    { name: "Shop Product", url: "" },
    { name: "Shoping Cart", url: "" },
    { name: "Wishlist", url: "" },
    { name: "Track Order", url: "" },
    { name: "Customer Help", url: "" },
    { name: "About Us", url: "" },
  ]
  const tags = [
    { name: "Game", url: "" },
    { name: "iPhone", url: "" },
    { name: "TV", url: "" },
    { name: "Asus Laptop", url: "" },
    { name: "Macbook", url: "" },
    { name: "SSD", url: "" },
    { name: "Graphics Card", url: "" },
    { name: "Power Bank", url: "" },
    { name: "Smart TV", url: "" },
    { name: "Speaker", url: "" },
    { name: "Tablet", url: "" },
    { name: "Microwave", url: "" },
    { name: "Samsung", url: "" },
  ]
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#191C1F] mt-[72px]">
      <div className="max-w-[1320px] py-[72px] flex flex-row items-start gap-2 justify-between w-full">
        <div className="flex flex-col gap-5 text-[15px]">
          <Logo footer={true} />
          <div className="flex flex-col text-gray-100">
            <p className="text-gray-400">Customer Supports:</p>
            <p>+923392089085</p>
          </div>
          <div className="max-w-[248px] text-gray-400">
            Bahria Phase 4 Civic center Rawalpindi Pakistan
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className = 'text-gray-100 font-bold text-[18px]'>Top Category</p>
          {topCat?.map((element,idx)=> {
            return <p className = 'text-gray-400 text-[15px] font-medium cursor-pointer hover:underline'>{element?.name}</p>
          })}
        </div>
        <div className="flex flex-col gap-2">
          <p className = 'text-gray-100 font-bold text-[18px]'>Quick Links</p>
          {quickLinks?.map((element,idx)=> {
            return <p className = 'text-gray-400 text-[15px] font-medium cursor-pointer hover:underline'>{element?.name}</p>
          })}
        </div>
        <div className="flex flex-col gap-2">
          <p className = 'text-gray-100 font-bold text-[18px]'>Popular Tags</p>
          <div className = 'max-w-[312px] w-full flex flex-wrap gap-2'>
          {tags?.map((element,idx)=> {
            return <p className = 'text-gray-100 border-[1px] border-gray-600 rounded-[2px] px-2 py-1 text-[15px] font-medium cursor-pointer hover:underline'>{element?.name}</p>
          })}
          </div>
        </div>
      </div>
      <p className="w-full border-t-[1px] border-gray-400 py-6 text-gray-300 text-center">
        Design and developed by Hani & Dani Group
      </p>
    </footer>
  );
}

export default Footer;
