import React from "react";

import dataSource from "../DataSource/DataSource";

import EmployeeEditor from "../EmployeeEditor/EmployeeEditor";
import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeStats from "../EmployeeStats/EmployeeStats";

class EmployeeManagementApp extends React.Component {
  constructor(props) {
    super(props);

    this.positions = dataSource.getPositions();

    this.state = { employees: dataSource.getEmployees() };

    this.handleEmployeesUpdate = this.handleEmployeesUpdate.bind(this);
  }

  componentDidMount() {
    dataSource.addChangeListener(this.handleEmployeesUpdate);
  }

  componentWillUnmount() {
    dataSource.removeChangeListener();
  }

  handleEmployeesUpdate() {
    this.setState({ employees: dataSource.getEmployees() });
  }

  render() {
    return (
      <div>
        <EmployeeEditor
          employee={dataSource.getEmptyEmployee()}
          positions={this.positions}
        />
        <EmployeeList list={this.state.employees} positions={this.positions} />
        <EmployeeStats />
      </div>
    );
  }
}

export default EmployeeManagementApp;
