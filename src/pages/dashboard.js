import React, { useContext } from "react";
import TableUser from "../components/tableUser";
import { ProductContext } from "../context/UserContext";

export default function Dashboard() {
  const data = useContext(ProductContext);

  return (
    <div>
      <TableUser dataProduct={data.data} />
    </div>
  );
}
