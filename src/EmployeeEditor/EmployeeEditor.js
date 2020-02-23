import React from "react";
import dataSource from "../DataSource/DataSource";

class EmployeeEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props.employee };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const employee = {
      ...this.state,
      positionId: parseInt(this.state.positionId, 10)
    };
    dataSource.addEmployee(employee);

    this.setState(dataSource.getEmptyEmployee());
  }

  render() {
    const positions = this.props.positions;
    const { name, positionId, contractor } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <fieldset>
            <div>
              <label htmlFor={"name"}>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor={"position"}>Position:</label>
              <select
                name={"positionId"}
                value={positionId}
                onChange={this.onChangeHandler}
              >
                {positions.map(position => {
                  return (
                    <option key={position.id} value={position.id}>
                      {position.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor={"contractor"}>Is contractor:</label>
              <input
                type="checkbox"
                name="contractor"
                checked={contractor}
                onChange={this.onChangeHandler}
              />
            </div>
            <div>
              <input type="submit" value={"Add"} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default EmployeeEditor;
