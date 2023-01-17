import React, { useContext } from "react";
import TableUser from "../components/tableUser";
import { ProductContext } from "../context/ProductContext";

export default function Dashboard() {
  const data = useContext(ProductContext);

  return (
    <div className="grid justify-center mt-10">
      <div className="w-[100%]">
        <TableUser dataProduct={data.data} />
      </div>
    </div>
  );
}
