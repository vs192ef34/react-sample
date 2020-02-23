import React from "react";

import dataSource from "../DataSource/DataSource";

export default function EmployeeStats(props) {
  const employees = dataSource.getEmployees();
  const employeeCount = employees.length;
  const contractorsCount = employees.filter(empl => empl.contractor === true)
    .length;

  return (
    <div>
      <div>
        Count: <span>{employeeCount}</span>
      </div>
      <div>
        Conractors: <span>{contractorsCount}</span>
      </div>
    </div>
  );
}
