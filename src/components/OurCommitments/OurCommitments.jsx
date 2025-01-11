import React from "react";

function OurCommitments() {
  const data = [
    { name: "Fasted Delivery", des: "Delivery in 24/H", img: "/Package.png" },
    {
      name: "24 Hours Return",
      des: "100% money-back guarantee",
      img: "/Trophy.png",
    },
    {
      name: "Secure Payment",
      des: "Your money is safe",
      img: "/CreditCard.png",
    },
    {
      name: "Support 24/7",
      des: "Live contact/message",
      img: "/Headphones.png",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1320px] p-[16px] w-full border-[1px] border-gray-200 flex flex-row items-center justify-between gap-5 mt-[24px] ">
        {data?.map((element, idx) => {
          return (
            <div key={idx} className="flex flex-row items-center gap-[16px]">
              {" "}
              <div>
                <img src={element?.img} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[16px] text-gray-900">{element?.name}</p>
                <p className="text-[#5F6C72] text-[14px]">{element?.des}</p>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurCommitments;
