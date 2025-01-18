import { Space,Select } from "antd";
import React from "react";

function CustomSelect({defaultValue,onChange,options,label}) {
  return (
    <Space wrap className = 'flex flex-col gap-2 items-start' style = {{width:'100%',maxWidth:"500px"}}>
    <label className = 'text-[16px] text-gray-900 font-medium'>{label}</label>
      <Select 
        defaultValue={defaultValue}
        style = {{maxWidth:"500px",width:'312px',height:'44px',border:' #E4E7E9'}}
        onChange={onChange}
        options={options}
      />
    </Space>
  );
}

export default CustomSelect;
