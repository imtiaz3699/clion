import React, { useState } from "react";
import { useFormik } from "formik";
import { Dropdown, Form, Input, Button } from "antd";
import * as Yup from "yup";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { LuUserRound } from "react-icons/lu";
import { useUserContext } from "../../context/userContext";
import { Spin } from "antd";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { setUser, setToken, token, user,createUserMutation } = useUserContext();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }), 
    
    onSubmit: (values, actions) => {
      createUserMutation.mutate(values, {
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
            toggleDropdown();
            actions.setSubmitting(false);
          }
        },
        onError: (err) => {
          console.error("Error creating user:", err);
          actions.setSubmitting(false);
        },
      });
    },
  });
  const loginForm = (
    <div className="p-[32px] w-[424px] rounded-[8px] shadow-xl bg-white ">
      <Spin spinning={formik?.isSubmitting}>
        <h2 className="text-center mb-[20px] font-bold text-xl">
          Sign in to your account
        </h2>
        <Form
          layout="vertical"
          onFinish={formik.handleSubmit} // Use onFinish instead of onSubmitCapture
          initialValues={formik.values}
          onSubmitCapture={formik.handleSubmit}
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              className="!h-[44px] font-medium"
              prefix={<UserOutlined />}
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              className="!h-[44px] font-medium"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              {...formik.getFieldProps("password")}
            />
          </Form.Item>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <p className="text-sky-600 cursor-pointer hover:text-sky-400">
              Forget Password?
            </p>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="!h-[48px] font-bold"
            >
              LOGIN →
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "10px 0" }}>Don't have an account?</p>
          <Button
            type="default"
            block
            className="text-[#FA8232] !h-[48px] !border-[1px] font-bold border-[#FA8232]"
          >
            CREATE ACCOUNT
          </Button>
        </div>
      </Spin>
    </div>
  );
  return (
    <>
      <Dropdown
        overlay={loginForm}
        trigger={["click"]}
        open={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <Button type="link" onClick={toggleDropdown}>
          <LuUserRound className="text-[20px] text-white hover:text-gray-400 cursor-pointer delay-75" />
        </Button>
      </Dropdown>
    </>
  );
}

export default User;
