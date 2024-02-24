import React from "react";
import { Table } from "../components/material/Table";

export default function ProductScreen() {
  return (
    <div className="text-gray-500 p-4">
      <Table
        title="Product List"
        description="See information about all product"
      />
    </div>
  );
}
