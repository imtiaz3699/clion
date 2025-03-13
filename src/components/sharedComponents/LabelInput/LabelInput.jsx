import { Input } from 'antd'
import React from 'react'

function LabelInput({label,placeholder,onChange,value,name}) {
  return (
    <div className = 'flex flex-col gap-2 w-full'>
        <label className = 'text-gray-500'>{label}</label>
        <Input name = {name} placeholder={placeholder} onChange={onChange} value = {value} className = '  w-full !h-[44px] '/>
    </div>
  )
}

export default LabelInput
