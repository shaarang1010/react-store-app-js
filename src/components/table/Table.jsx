import React from "react";
import Table from "react-bootstrap/Table";

export const TableComponent = ({ tableData }) => {
  return (
    <Table striped bordered hover>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td colSpan={4}>{`${data.key
                .charAt(0)
                .toUpperCase()}${data.key.slice(1)}`}</td>
              <td>{data.value}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
