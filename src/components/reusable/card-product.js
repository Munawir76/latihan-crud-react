import React from "react";
import { Button, Card, Col, Row } from "antd";

const { Meta } = Card;

export default function CardProduct() {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 340,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        <div className="text-lg font-bold">
          <span>INI JUDULNYA</span>
        </div>
        <div className="mt-5">
          <span>
            Ini adalah deskripsi tentang product ini. untuk membantu konsumen
            memahami secara singkat terkait product ini
          </span>
        </div>
        <div>
          <Row className="justify-between  mt-5">
            <Col className="text-lg font-semibold">
              <span>Rp. 30.000</span>
            </Col>
            <Col>
              <Button
                type="primary"
                size="large"
                className="w-14 bg-blue-700 py-3"
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
