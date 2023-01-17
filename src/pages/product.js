import React, { useContext } from "react";
import CardProduct from "../components/reusable/card-product";
import { ProductContext } from "../context/ProductContext";
import { Row, Spin } from "antd";

export default function Product() {
  const data = useContext(ProductContext);
  const { data: dataProoduct } = data;
  console.log(dataProoduct);
  return (
    <div className="p-10">
      <Row className="flex justify-center gap-7 ">
        {dataProoduct ? (
          dataProoduct?.map((data) => {
            return (
              <div>
                <CardProduct
                  harga={data.price}
                  title={data.menu}
                  deskripsi={data.description}
                  image={data.image}
                />
              </div>
            );
          })
        ) : (
          <div className="h-screen align-middle">
            <Spin size="large" className="align-middle mt-60">
              <div className="content align-bottom" />
            </Spin>
          </div>
        )}
      </Row>
    </div>
  );
}
