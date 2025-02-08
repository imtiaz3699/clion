import React from "react";
import InputWithLabel from "../../InputWithLabel/InputWithLabel";
import { Button, Divider, Spin } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import SocialButtons from "../../UiComponents/SocialButtons/SocialButtons";
import { useFormik } from "formik";
import { useUserContext } from "../../../context/userContext";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
function Login() {
  const { setUser, setToken, loginUserMutation } = useUserContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      error: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, actions,) => {
      loginUserMutation.mutate(values, {
        onSuccess: (data) => {
          if (data?.status === 200) {
            console.log("User created successfully:", data);
            Cookies.set("token", JSON.stringify(data?.data?.data?.token), {
              expires: 7,
            });
            setUser(data?.data?.data?.data);
            setToken(data?.data?.data?.token);
            Cookies.set("user", JSON.stringify(data?.data?.data?.data), {
              expires: 7,
            });
            actions.resetForm();
            actions.setSubmitting(false);
            navigate('/')
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
  return (
    <div className="px-[32px] flex flex-col gap-[16px]">
      <Spin spinning={formik.isSubmitting}>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-[16px]"
        >
          <InputWithLabel
            label="Email address"
            name="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          />
          <InputWithLabel
            label="Password"
            password={true}
            name="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          />
          <div className="w-full mt-[16px]">
            {formik.values.error && (
              <p className="text-red-500 text-center">{formik.values.error}</p>
            )}
            <Button
              className=" !h-[56px] text-[18px] font-medium w-full"
              icon={<FaArrowRight />}
              iconPosition="end"
              type="primary"
              htmlType="submit"
            >
              SIGN IN
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

export default Login;
