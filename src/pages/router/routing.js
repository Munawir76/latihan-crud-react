import React from "react";
import { Route, Routes } from "react-router";
import Product from "../product";
import Home from "../home";
import LayoutPage from "../../layout";
import Dashboard from "../dashboard";
import Login from "../login";
import Register from "../register";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/product"
        element={
          <LayoutPage>
            <Product />
          </LayoutPage>
        }
      />
      <Route
        path="/"
        element={
          <LayoutPage>
            <Home />
          </LayoutPage>
        }
      />
      <Route
        path="/admin"
        element={
          <LayoutPage>
            <Dashboard />
          </LayoutPage>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
