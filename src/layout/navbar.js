import React, { useContext } from "react";
import { Button, Image, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
const { Header } = Layout;

const Navbar = () => {
  const dataUser = useContext(UserProvider);
  console.log(dataUser, "ini data user");
  return (
    <UserProvider>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "#5792ff",
        }}
      >
        <div className="flex justify-between">
          <div className="text-lg text-white flex justify-between mt-4 gap-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
          </div>
          <div className="text-lg text-white flex justify-between mt-4 gap-1">
            <h2 className="mt-1">Hallo, </h2>

            <span>
              <Button className="border-none hover:bg-none">
                <UserOutlined
                  className="hover:text-white text-white"
                  height="20"
                />
              </Button>
            </span>
          </div>
        </div>
      </Header>
    </UserProvider>
  );
};

export default Navbar;
