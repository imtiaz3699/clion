import { Input, Typography } from "antd";
import { ErrorMessage } from "formik";
import React from "react";

function InputWithLabel({ label, onChange, placeholder, value, password,name,error,forgotPassword,disabled,type }) {
  return (
    <>
      {password ? (
        <div className="w-full">
          <div className="flex flex-row items-center justify-between mb-2 font-medium text-[16px]">
            <div  >{label}</div>
           {
            forgotPassword &&
            <div level={5} className = '!p-0 text-sky-500 hover:underline cursor-pointer'>
              Forgot password
            </div>
          }
          </div>
          <Input.Password
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="!h-[44px]"
            name = {name}
          />
          {error && (
            <p className="text-red-500 text-[12px] font-medium">
              {error}
            </p>
          )}
        </div>
      ) : (
        <div className="w-full">
          <Typography.Title level={5}>{label}</Typography.Title>
          <Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="!h-[44px]"
            name = {name}
            disabled={disabled}
            type = {type}
          />
          {
            <p className="text-red-500 text-[12px] font-medium h-[10px]">
              {error}
            </p>
          }
        </div>
      )}
    </>
  );
}

export default InputWithLabel;
