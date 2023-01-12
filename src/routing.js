import React from "react";
import { Route, Routes } from "react-router";
import Product from "./pages/product";
import Home from "./pages/home";
import LayoutPage from "./layout";
import Dashboard from "./pages/dashboard";

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
    </Routes>
  );
};

export default Routing;
