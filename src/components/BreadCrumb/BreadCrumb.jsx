import { Breadcrumb } from "antd";
import React from "react";

function CustomBreadCrumb() {
  return (
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: <a href="">Product List</a>,
        },
      ]}
    />
  );
}

export default CustomBreadCrumb;
