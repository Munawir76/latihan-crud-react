import React, { useContext, useState } from "react";
import { UserColumns, MenuColumns } from "../constant/tableColumns";
import { Space, Table, Tag } from "antd";

export default function TableUser(props) {
  const { dataProduct } = props;
  return (
    <div>
      <Table columns={UserColumns} dataSource={dataProduct} />;
    </div>
  );
}
