import React from "react";

import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const Table = (props) => {
  const { sortColumn, columns, onSort, data } = props;
  return (
    <table class="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
