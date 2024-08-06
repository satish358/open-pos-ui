import React from "react";

const DataTable = () => {
  return (
    <>
      <table border={1} className="w-100">
        <thead>
          <th style={{ textAlign: "start", padding: "10px" }}>Name</th>
          <th style={{ textAlign: "start", padding: "10px" }}>Age</th>
          <th style={{ textAlign: "start", padding: "10px" }}>Sex</th>
        </thead>
        <tbody>
          <tr>
            <td>Some</td>
            <td>23</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Some</td>
            <td>23</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Some</td>
            <td>23</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Some</td>
            <td>23</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
