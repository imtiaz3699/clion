import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Image,
  Menu,
  Pagination,
  Popconfirm,
  Space,
  Table,
  Tag,
} from "antd";
import { DELETE_PRODUCT, GET_PRODUCTS } from "../../api/productApi";
import { useUserContext } from "../../context/userContext";
import { useQuery } from "@tanstack/react-query";
import { ThreeDots } from "../../components/Icons/Icons";
import { MessageContext } from "../../context/messageContext";
import { useNavigate } from "react-router";

const ProductList = () => {
  const messageApi = useContext(MessageContext);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const products = useQuery({
    queryKey: ["products", currentPage, 10, user?.id], // Unique key with params
    queryFn: () => GET_PRODUCTS(currentPage, 10, user?.id, null), // Function reference
  });
  let da = products?.data?.data?.data?.products?.map((element, idx) => ({
    key: element?.id,
    product_img: element?.product_img,
    product_name: element?.product_name,
    product_description: element?.product_description,
    quantity: element?.quantity,
    product_condition: element?.product_condition,
    price: element?.price,
    featured: element?.featured ? "Yes" : "No",
    product_category: element?.category?.category_name,
  }));
  const handlePageChange = (values) => {
    setCurrentPage(values);
  };
  const columns = [
    {
      title: "Product Image",
      dataIndex: "product_img",
      key: "product_img",
      render: (text) => {
        // console.log(text,'fadlfajshdlfkjs')
        return (
          <div className="!w-[50px] !h-[50px] overflow-hidden rounded-full">
            {" "}
            <Image
              className="!w-[50px] !h-[50px] overflow-auto rounded-full"
              src={text?.[0]}
            />{" "}
          </div>
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Product Description",
      dataIndex: "product_description",
      key: "product_description",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Product Condition",
      key: "product_condition",
      dataIndex: "product_condition",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Product Category",
      key: "product_category",
      dataIndex: "product_category",
    },
    {
      title: "Featured",
      key: "featured",
      dataIndex: "featured",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Dropdown overlay={menu(record)} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <ThreeDots />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];
  const handleDelete = async (id) => {
    if (!id) {
      return "Please Select product";
    }
    try {
      const res = await DELETE_PRODUCT(id);
      if (res?.status === 200) {
        products.refetch();
        messageApi.open({
          type: "success",
          content: "Product deleted successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateProduct = (id) => {
    navigate(`/user/product_settings?id=${id}`)
  }
  const menu = (record) => (
    <Menu>
      <Menu.Item key="view">View</Menu.Item>
      <Menu.Item key="update">
       <div onClick={()=> handleUpdateProduct(record?.key)}> Update</div>
      </Menu.Item>
      <Menu.Item key="delete" danger>
        <Popconfirm
          title="Delete Product"
          description="Are you sure you want to delete this product?"
          onConfirm={() => handleDelete(record?.key)}
          // onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
  console.log(products?.data?.data?.data, "ProductsDataadsfasd");
  return (
    <div className="w-full">
      <Table
        loading={products?.isLoading}
        columns={columns}
        dataSource={da}
        pagination={false}
      />
      <div className="mt-10 flex items-center justify-end w-full">
        <Pagination
          defaultCurrent={currentPage}
          total={products?.data?.data?.data?.pagination?.totalProducts}
          pageSize={limit}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default ProductList;
