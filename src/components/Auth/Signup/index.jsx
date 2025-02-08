import React from "react";
import InputWithLabel from "../../InputWithLabel/InputWithLabel";
import { RightArrowIcon } from "../../Icons/Icons";
import { Button, Checkbox, Spin } from "antd";
import SocialButtons from "../../UiComponents/SocialButtons/SocialButtons";
import { useUserContext } from "../../../context/userContext";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";

function Signup() {
  const { createUserMutation } = useUserContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      privacyPolicy: false,
      error: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last name is required."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values, actions) => {
      createUserMutation.mutate(values, {
        onSuccess: (data) => {
          if (data?.status === 200) {
            console.log("User created successfully:", data);
            actions.resetForm();
            actions.setSubmitting(false);
            navigate("/auth/login");
          }
        },
        onError: (err) => {
          console.error("Error creating user:", err);
          formik.setFieldValue("error", err?.response?.data?.message);
          actions.setSubmitting(false);
        },
      });
    },
  });
  console.log(formik.errors, "formikerros");
  return (
    <div className="px-[32px] flex flex-col gap-[16px]">
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <InputWithLabel
            label="First Name"
            name="firstName"
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && formik.errors.firstName}
          />
          <InputWithLabel
            label="Last Name"
            name="lastName"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && formik.errors.lastName}
          />
          <InputWithLabel
            label="Email address"
            name="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          />
          <InputWithLabel
            password={true}
            label="Password"
            placeholder={"8+ Characters"}
            name="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          />
          <InputWithLabel
            password={true}
            label="Confirm Password"
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <div className="flex flex-row items-start gap-2 mt-2">
            <Checkbox
              name="privacyPolicy"
              value={formik.values.privacyPolicy}
              onChange={formik.handleChange}
            />
            <p className="">
              Are you agree to Clicon{" "}
              <span className="text-sky-500 hover:underline">
                {" "}
                Terms of Condition{" "}
              </span>{" "}
              and{" "}
              <span className="text-sky-500 hover:underline">
                {" "}
                Privacy Policy.
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-[20px]">
            {formik.values.error && (
              <p className="text-red-500 text-[14px] text-center">
                {formik.values.error}
              </p>
            )}
            <Button
              className=" !h-[56px] text-[18px] font-medium w-full"
              icon={<RightArrowIcon />}
              iconPosition="end"
              type="primary"
              htmlType="submit"
            >
              SIGN UP
            </Button>
          </div>
        </form>
      </Spin>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="w-full h-[1px] bg-gray-300" />
        <p className="text-gray-400 font-medium">Or</p>
        <div className="w-full h-[1px] bg-gray-300" />
      </div>
      <SocialButtons />
    </div>
  );
}

export default Signup;
