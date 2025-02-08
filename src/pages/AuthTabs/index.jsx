import React from "react";
import { Card, Tabs } from "antd";
// import { useNavigate, useLocation, Outlet } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router";
import { useNavigate, useLocation, Outlet } from "react-router";
function AuthTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeKey = location.pathname.split("/")[2] || "login";
  const onChange = (key) => {
    navigate(`/auth/${key}`);
  };

  return (
    <div className=" w-full flex items-center justify-center">
    <div className = 'max-w-[1320px] w-full flex items-center justify-center auth-card'>
      
        <Card className="w-[426px] shadow-xl py-2 mt-5">
          <Tabs activeKey={activeKey} onChange={onChange}>
            <Tabs.TabPane tab="Login" key="login" />
            <Tabs.TabPane tab="Signup" key="signup" />
          </Tabs>
          <Outlet />
        </Card>
      
      </div>
    </div>
  );
}

export default AuthTabs;
