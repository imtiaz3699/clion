import React from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { useFormik } from "formik";
import { Button, Select, Typography } from "antd";

function ProductSettings() {
  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_description: "",
      product_img: "",
      quantity: 0,
      product_condition: "",
      price: 0,
      user_id: null,
      product_category: "",
    },
  });

  return (
    <form className="flex flex-col w-full">
      <div className="flex flex-row items-start gap-[50px] mt-[30px]">
        <div className="w-full flex flex-col gap-[20px]">
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
              name="lastName"
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
          <div className="w-full">
            <Typography.Title level={5}>Product Condition</Typography.Title>
            <Select
              defaultValue={"Product Condition"}
              name="condition"
              // onChange={handleChangeUserType}
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
              value={formik?.values?.condition}
            />
          </div>
        </div>
        <div className="max-w-[50%] w-full">
              
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <Button type = 'primary'>Submit</Button>
      </div>
    </form>
  );
}

export default ProductSettings;
