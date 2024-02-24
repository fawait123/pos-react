import React from "react";
import { Table } from "../components/material/Table";

export default function CategoryScreen() {
  return (
    <div className="text-gray-500 p-4">
      <Table
        title="Category List"
        description="See information about all category"
      />
    </div>
  );
}
