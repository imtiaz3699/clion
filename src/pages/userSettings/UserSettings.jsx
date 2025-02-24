import React from "react";
import { Tabs } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router";
import { useUserContext } from "../../context/userContext";
function User() {
  const user = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  const activeKey = location.pathname.split("/")[2] || "/";
  console.log(activeKey, "fadlsfsjda");
  const onTabChange = (key) => {
    navigate(`/user/${key}`);
  };
  console.log(user?.user, "User");
  const sellerExists = user?.user?.user_type === "seller"
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <div className="max-w-[1320px] w-full">
        <Tabs defaultActiveKey={activeKey} onChange={onTabChange}>
          <Tabs.TabPane tab="Profile Settings" key="profile_settings" />
          {sellerExists && (
            <Tabs.TabPane tab="Product Settings" key="product_settings" />
          )}
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
}

export default User;
