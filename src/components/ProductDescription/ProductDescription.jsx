import React from "react";
import { Guarantee, Payment, Shipping, Support, Warranty } from "../Icons/Icons";
function ProductDescription() {
  const data = [
    {
      name: "Free 1 Year Warranty",
      img: <Warranty className="text-[#FA8232] text-[20px]"/>,
    },
    {
      name: "Free Shipping & Fasted Delivery",
      img: <Shipping className="text-[#FA8232] text-[20px]"/>,
    },
    {
      name: "100% Money-back guarantee",
      img: <Guarantee className="text-[#FA8232] text-[20px]"/>,
    },
    {
      name: "24/7 Customer support",
      img: <Support className="text-[#FA8232] text-[20px]" />,
    },
    {
      name: "Secure payment method",
      img: <Payment className="text-[#FA8232] text-[20px]" />,
    },
    
  ];
  const shippingData = [
    {
      name:"Courier",
      description:"2-4 days, Free Shipping"
    },   
    {
      name:"Local Shipping",
      description:"up to one week, $19.00"
    },   
    {
      name:"UPS Ground Shipping",
      description:"4 - 6 days, $29.00"
    },   
    {
      name:"Unishop Global Export",
      description:"3 - 4 days, $39.00"
    }   
  ]
  return (
    <div className="mt-[72px] flex flex-row items-start justify-between gap-[50px] w-full border-[1px] border-gray-300 p-[40px]">
      <div className="max-w-[616px] w-full">
        <p className="text-[18px] font-medium ">Description</p>
        <p className="text-gray-500 mt-[12px] text-[14px]">
          The most powerful MacBook Pro ever is here. With the blazing-fast M1
          Pro or M1 Max chip — the first Apple silicon designed for pros — you
          get groundbreaking performance and amazing battery life. Add to that a
          stunning Liquid Retina XDR display, the best camera and audio ever in
          a Mac notebook, and all the ports you need. The first notebook of its
          kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
          performance of the M1 architecture to a whole new level for pro users.
        </p>
      </div>
      <div className="max-w-[280px] w-full">
        <p className="text-[18px] font-medium ">Feature</p>
        <div className = 'flex flex-col gap-[14px] mt-[12px]'>
        {
            data?.map((element,id) => {
                return <div className = 'flex flex-row items-center gap-5'> {element?.img} <p className = ' text-[16px]'>{element?.name}</p>  </div>
            } )
        }
        </div>
      </div>
      <div className="flex flex-col items-start gap-[] max-w-[272px] w-full">
        <p className="text-[18px] font-medium ">Shopping Information</p>
        <div className = 'flex flex-col gap-[10px] mt-[12px]'>
         {
          shippingData?.map((element,idx)=> {
            return <p key = {idx} className = 'flex flex-row items-center text-[14px] font-medium'>{element?.name} : {" "} <span className = 'text-gray-500'>{element?.description} </span> </p> 
          })
         } 
         </div>
      </div>
    </div>
  );
}

export default ProductDescription;
