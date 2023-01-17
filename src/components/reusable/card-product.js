import React from "react";
import { Button, Card, Col, Row } from "antd";
import { convertRupiah } from "../../helper/convert-rupiah";

export default function CardProduct(props) {
  const { harga, title, deskripsi, category, image } = props;
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 340,
        }}
        cover={
          <img alt="example" src={`http://localhost:3000/file/${image}`} />
        }
      >
        <div className="text-lg font-bold">
          <span>{title}</span>
        </div>
        <div className="mt-5">
          <span>{deskripsi}</span>
        </div>
        <div>
          <Row className="justify-between  mt-5">
            <Col className="text-lg font-semibold">
              <span>{convertRupiah(harga)}</span>
            </Col>
            <Col>
              <Button
                type="primary"
                size="large"
                className="w-28 bg-blue-700 py-3"
              >
                Beli
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
