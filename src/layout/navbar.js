import React from "react";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const Navbar = () => {
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <div className="flex justify-between">
        <div className="text-lg text-white flex justify-between mt-4 gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Product</Link>
        </div>
        <div className="text-lg text-white flex justify-between mt-4 gap-4">
          <h2 className="mt-1">
            Hallo, <span className="font-bold">Admin</span>
          </h2>
          <span>
            <Link to={"/admin"}>
              <UserOutlined />
            </Link>
          </span>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
