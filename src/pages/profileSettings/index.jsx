import React, { useEffect } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import CustomSelect from "../../components/sharedComponents/Select/CustomSelect";
import { Button, Select, Typography } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../api/authApi";

function ProfileSettings() {
  // const userProfile = useQuery();
  useEffect(()=> {
    const fetch = async() => {
      const res = await getProfile();
      console.log(res,'Response from getProfile')
    }
    fetch();
  },[])
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-[1320px] w-full mt-[20px]">
        <p className="text-[25px] font-bold text-gray-700 underline">
          User Profile
        </p>
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex items-center justify-center w-full">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] border-gray-200 shadow-md cursor-pointer"></div>
          </div>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel label="First Name" />
            <InputWithLabel label="Last Name" />
          </div>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel label="Email" />
            <div className="w-full">
              <Typography.Title level={5}>Role</Typography.Title>
              <Select
                defaultValue={"Select Role"}
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "44px",
                  border: " #E4E7E9",
                }}
                options={[
                  { label: "Seller", value: "seller" },
                  { label: "Buyer", value: "buyer" },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel label="Phone Number" />
            <InputWithLabel label="City" />
          </div>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel label="Address" />
            <InputWithLabel label="Delivery Address" />
          </div>
          <div className = 'flex items-center justify-end'><Button className = '' type = 'primary'>Update Profile</Button> </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
