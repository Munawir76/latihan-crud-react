import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function FooterPage() {
  return (
    <Footer style={{ backgroundColor: "black", marginTop: 90 }}>
      <p className="flex justify-center text-xl font-bold text-white">
        INI FOOTER
      </p>
    </Footer>
  );
}
