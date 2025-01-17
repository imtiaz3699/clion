import React, { useState } from "react";
import { Dropdown, Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from "@ant-design/icons";
import { LuUserRound } from "react-icons/lu";

function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const loginForm = (
    <div className = 'p-[32px] w-[424px] rounded-[8px] shadow-xl bg-white ' >
      <h2 className = 'text-center mb-[20px] font-bold text-xl' >Sign in to your account</h2>
      <Form layout="vertical">
        <Form.Item label="Email Address" name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
          <Input className = '!h-[44px] font-medium' prefix={<UserOutlined />} placeholder="Email Address" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            className = '!h-[44px] font-medium'
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <p  className = 'text-sky-600 cursor-pointer hover:text-sky-400'>Forget Password?</p>
        </div>
        <Form.Item>
          <Button type="primary" block className = '!h-[48px] font-bold '>
            LOGIN →
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "10px 0" }}>Don't have an account?</p>
        <Button type="default" block className = 'text-[#FA8232] !h-[48px] !border-[1px] font-bold border-[#FA8232]'>
          CREATE ACCOUNT
        </Button>
      </div>
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
