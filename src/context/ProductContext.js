import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { appConfig } from "../config/app";

export const ProductContext = createContext([
  {
    menu: true,
  },
]);

export const ProductProvider = ({ children }) => {
  const [dataProduct, setDataProduct] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    axios
      .get(`${appConfig.baseUrl}/menu`, {
        signal: controler.signal,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setDataProduct(res.data);
      });
    return () => {
      controler.abort();
    };
  }, []);

  return (
    <ProductContext.Provider value={dataProduct}>
      {children}
    </ProductContext.Provider>
  );
};
