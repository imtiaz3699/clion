import React, { useEffect } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { Button, Select, Typography, message } from "antd";
import { useFormik } from "formik";
import { useUserContext } from "../../context/userContext";

function ProfileSettings() {
  // const userProfile = useQuery();
  const { user, updateUserMutation } = useUserContext();

  const initialValues = React.useMemo(
    () => ({
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      user_type: user?.user_type,
      address: user?.address,
      city: user?.city,
      phone_number: user?.phone_number,
      delivery_type: user?.delivery_type,
      privacyPolicy: user?.privacyPolicy,
    }),
    [user]
  );
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      updateUserMutation.mutate({ id: user?.id, data: values });
    },
  });
  const handleChangeUserType = (value) => {
    formik.setFieldValue("user_type", value);
  };
  const handleChangeDeliveryType = (value) => {
    formik.setFieldValue("delivery_type", value);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-[1320px] w-full mt-[20px]">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full flex flex-col gap-[20px]">
            <div className="flex items-center justify-center w-full">
              <div className="w-[100px] h-[100px] rounded-full border-[1px] border-gray-200 shadow-md cursor-pointer"></div>
            </div>
            <div className="flex flex-row items-center gap-10">
              <InputWithLabel
                label="First Name"
                value={formik?.values?.firstName ?? user?.firstName}
                name="firstName"
                onChange={formik.handleChange}
              />
              <InputWithLabel
                label="Last Name"
                value={formik?.values?.lastName ?? user?.lastName}
                name="lastName"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-row items-center gap-10">
              <InputWithLabel
                onChange={formik.handleChange}
                label="Email"
                disabled={true}
                name="email"
                value={formik?.values?.email ?? user?.email}
              />
              <div className="w-full">
                <Typography.Title level={5}>Role</Typography.Title>
                <Select
                  defaultValue={"Select Role"}
                  name="user_type"
                  onChange={handleChangeUserType}
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
                  value={formik?.values?.user_type ?? user?.user_type}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-10">
              <InputWithLabel
                onChange={formik.handleChange}
                label="Phone Number"
                value={formik.values.phone_number ?? user?.phone_number}
                name="phone_number"
              />
              <InputWithLabel
                onChange={formik.handleChange}
                label="City"
                name="city"
                value={formik.values.city ?? user?.city}
              />
            </div>
            <div className="flex flex-row items-center gap-10">
              <InputWithLabel
                onChange={formik.handleChange}
                label="Address"
                name="address"
                value={formik.values.address ?? user?.address}
              />
              <div className="w-full">
                <Typography.Title level={5}>Delivery Type</Typography.Title>
                <Select
                  defaultValue={"Delivery Type"}
                  name="delivery_type"
                  onChange={handleChangeDeliveryType}
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "44px",
                    border: " #E4E7E9",
                  }}
                  options={[
                    { label: "Cash On Delivery", value: "cash_on_delivery" },
                  ]}
                  value={formik?.values?.delivery_type ?? user?.delivery_type}
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button className="" type="primary" htmlType="submit">
                Update Profile
              </Button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileSettings;
