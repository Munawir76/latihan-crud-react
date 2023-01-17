import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext([
  {
    name: true,
  },
]);

export const ProductProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);
  const [dataProduct, setDataProduct] = useState("");

  //   async function getProduct() {
  //     try {
  //       await axios.get(`http://localhost:3000/menu`).then((res) => {
  //         // console.log(res.data, "ini res get data");
  //         setDataProduct(res.data.data);
  //       });
  //     } catch (error) {
  //       console.log("ini error", error);
  //     }
  //   }
  useEffect(() => {
    // getProduct();
    const controler = new AbortController();
    axios
      .get(`http://localhost:3000/menu`, {
        signal: controler.signal,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res.data, "ini res get data");
        setDataProduct(res.data);
      });
    return () => {
      controler.abort();
    };
  }, []);

  const resultDataproduct = {
    state: isLogged,
    setter: setLogged,
    data: dataProduct,
  };
  return (
    <ProductContext.Provider value={dataProduct}>
      {children}
    </ProductContext.Provider>
  );
};
