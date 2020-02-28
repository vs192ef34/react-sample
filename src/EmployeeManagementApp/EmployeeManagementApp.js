import React from "react";

import { Layout, Row, Col, Typography, Card, Form } from "antd";

import dataSource from "../DataSource/DataSource";

import EmployeeEditor from "../EmployeeEditor/EmployeeEditor";
import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeStats from "../EmployeeStats/EmployeeStats";

import "./EmployeeManagementApp.css";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

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
    const WrappedEmployeeEditor = Form.create({ name: "employee-editor" })(
      EmployeeEditor
    );

    return (
      <div>
        <Layout>
          <Header>
            <Title>Employee Management System</Title>
          </Header>
          <Content>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card title="Employee">
                  <WrappedEmployeeEditor
                    employee={dataSource.getEmptyEmployee()}
                    positions={this.positions}
                  />
                </Card>
              </Col>
              <Col span={18}>
                <Card title="Employee List">
                  <EmployeeList
                    list={this.state.employees}
                    positions={this.positions}
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <EmployeeStats />
              </Col>
            </Row>
          </Content>
          <Footer>Demo sample</Footer>
        </Layout>
      </div>
    );
  }
}

export default EmployeeManagementApp;
