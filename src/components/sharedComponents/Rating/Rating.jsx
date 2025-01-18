import React from 'react';
import { Rate } from 'antd';
const Rating = ({value}) => <Rate allowHalf defaultValue={value} className = 'text-[#FA8232] text-[15px]' />;
export default Rating;