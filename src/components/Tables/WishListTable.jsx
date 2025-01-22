import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { CartIcon, CloseIcon } from '../Icons/Icons';


const columns = [
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
    width: '25%', // Equal width
    render: (text) => <div className = ''> <div className = 'flex flex-row items-center gap-2'><img src = '/CreditCard.png' className = 'w-[72px] h-[72px]' /> {text} </div></div>,
  },
  {
    title: 'Price',
    dataIndex: 'age',
    key: 'age',
    width: '25%', // Equal width
  },
  {
    title: 'Stock Status',
    dataIndex: 'address',
    key: 'address',
    width: '25%', // Equal width
  },
  {
    title: 'Action',
    key: 'action',
    width: '25%', // Equal width
    render: (_, record) => (
      <Space size="middle" className="flex flex-row items-center gap-[24px]">
        <Button
          icon={<CartIcon className="text-[18px]" />}
          iconPosition="end"
          className="bg-[#FA8232] text-white !h-[48px] rounded-[5px] text-[20px] font-normal"
        >
          ADD TO CART
        </Button>
        <button>
          <CloseIcon className="text-[20px] text-[#929FA5]" />
        </button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];
const WishListTable = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default WishListTable;