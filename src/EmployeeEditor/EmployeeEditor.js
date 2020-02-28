import React from "react";

import { Form, Select, Input, Button, Checkbox } from "antd";

import dataSource from "../DataSource/DataSource";

const { Option } = Select;

class EmployeeEditor extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dataSource.addEmployee({ ...values });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const positionOptions = this.props.positions.map(position => (
      <Option value={position.id}>{position.title}</Option>
    ));

    const selectElement = (
      <Select placeholder="Please select a position">{positionOptions}</Select>
    );

    const nameInput = getFieldDecorator("name", {
      rules: [{ required: true, message: "Please input employee name." }]
    })(<Input placeholder="Employee Name" />);

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Employee Name">{nameInput}</Form.Item>
          <Form.Item label="Position">
            {getFieldDecorator("positionId", {
              rules: [
                { required: true, message: "Please select Employee position." }
              ]
            })(selectElement)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("contractor", {
              valuePropName: "checked",
              initialValue: false
            })(<Checkbox>Is contractor?</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default EmployeeEditor;
