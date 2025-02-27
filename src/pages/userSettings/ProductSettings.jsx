import React, { useContext, useEffect, useState } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { useFormik } from "formik";
import { Button, Select, Typography } from "antd";
import UploadProductImage from "../../components/UploadProductImage/UploadProductImage";
import { useUserContext } from "../../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/categoryReducer";
import { ADD_PRODUCT } from "../../api/productApi";
import { MessageContext } from "../../context/messageContext";
import { productSchema } from "../../utils/validationSchema";
function ProductSettings() {
  const user = useUserContext();
  const messageApi = useContext(MessageContext);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer);
  const [fileList, setFileList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      product_name: "",
      product_description: "",
      product_img: [],
      quantity: 0,
      product_condition: "",
      price: 0,
      user_id: user?.user?.id,
      product_category: "",
    },
    validationSchema:productSchema,
    onSubmit: async (values) => {
      console.log(values, "ValuesToBeFine")
      const formData = new FormData();
      formData.append("product_name", values.product_name);
      formData.append("product_description", values.product_description);
      formData.append("quantity", values.quantity);
      formData.append("product_condition", values.product_condition);
      formData.append("price", values.price);
      formData.append("user_id", values.user_id);
      formData.append("product_category", values.product_category);
      if (values.product_img && values.product_img.length > 0) {
        values.product_img.forEach((file, index) => {
          formData.append(`product_img`, file?.originFileObj);
        });
      }
      console.log(values?.product_img[0],'faldjfhlads8978')
      try {
        const res = await ADD_PRODUCT(formData);
        console.log("Product added successfully", res);
        if(res?.data?.status === 200){
          messageApi.open({type:"success",content:res?.data?.message})
        }
      } catch (error) {
        console.error("Error adding product", error);
        messageApi.open({
          type:"error",
          content:error?.response?.data?.message,
        })
      }
    }
  });
  const handleChangeProductCondition = (values) => {
    formik.setFieldValue("product_condition", values);
  };

  const handleChangeProductCategory = (values) => {
    formik.setFieldValue("product_category", values);
  };

  useEffect(() => {
    if (category?.categories?.length === 0) {
      dispatch(getCategory());
    }
  }, [dispatch, category?.categories?.length]);

  useEffect(() => {
    if (fileList?.length > 0) {
      formik.setFieldValue("product_img", fileList);
    }
  }, [fileList]);
  console.log(formik.errors,'formikerrorsdefined')
  return (
    <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-row items-start gap-[50px] mt-[30px]">
        <div className="w-full flex flex-col gap-[20px]">
          <p className="text-[20px] font-medium text-gray-600">
            Product Details
          </p>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel
              label="Product Name"
              value={formik?.values?.product_name}
              name="product_name"
              onChange={formik.handleChange}
            />
            <InputWithLabel
              label="Product Description"
              value={formik?.values?.product_description}
              name="product_description"
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-row items-center gap-10">
            <InputWithLabel
              label="Quantity"
              value={formik?.values?.quantity}
              name="quantity"
              type="number"
              onChange={formik.handleChange}
            />
            <InputWithLabel
              label="price"
              value={formik?.values?.price}
              name="price"
              type="number"
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-row items-center gap-10">
            <div className="w-full">
              <Typography.Title level={5}>Product Condition</Typography.Title>
              <Select
                defaultValue={"Product Condition"}
                name="product_condition"
                onChange={handleChangeProductCondition}
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "44px",
                  border: " #E4E7E9",
                }}
                options={[
                  { label: "New", value: "new" },
                  { label: "Old", value: "old" },
                ]}
                value={formik?.values?.product_condition}
              />
            </div>
            <div className="w-full">
              <Typography.Title level={5}>Product Condition</Typography.Title>
              <Select
                defaultValue={"Product Category"}
                name="product_category"
                onChange={handleChangeProductCategory}
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "44px",
                  border: " #E4E7E9",
                }}
                options={category?.categoryList}
                value={formik?.values?.product_category}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[50%] w-full flex flex-col gap-[20px]">
          <p className="text-[20px] font-medium text-gray-600">
            Product images
          </p>
          <UploadProductImage fileList={fileList} setFileList={setFileList} />
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <Button type="primary" htmlType="submit">Submit</Button>
      </div>
    </form>
  );
}

export default ProductSettings;
