import React from "react";
import TableRow from "../TableRow/TableRow";

function EmployeeList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Position</th>
          <th>Is Contractor?</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(employee => {
          return (
            <TableRow
              key={employee.id}
              employee={employee}
              positions={props.positions}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default EmployeeList;
