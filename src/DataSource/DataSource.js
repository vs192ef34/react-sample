import nanoid from "nanoid";

class DataSource {
  constructor() {
    this.positions = [
      { id: 1, title: "Junior Developer" },
      { id: 2, title: "Middle Developer" },
      { id: 3, title: "Senior Developer" },
      { id: 4, title: "Designer" },
      { id: 5, title: "Business Analyst" }
    ];

    this.employees = [
      {
        id: "aaa",
        name: "Test 1",
        positionId: 1,
        contractor: true
      },
      {
        id: "aab",
        name: "Test 2",
        positionId: 2,
        contractor: false
      },
      {
        id: "aac",
        name: "Test 3",
        positionId: 4,
        contractor: true
      },
      {
        id: "aad",
        name: "Test 4",
        positionId: 5,
        contractor: false
      }
    ];
  }

  getPositions() {
    return this.positions;
  }

  getEmployees() {
    return this.employees;
  }

  getEmptyEmployee() {
    return {
      id: "",
      name: "",
      positionId: 1,
      contractor: false
    };
  }

  addEmployee(employee) {
    employee.id = nanoid();
    this.employees.push(employee);

    this.callChangeListener();
  }

  addChangeListener(listener) {
    this.changeListener = listener;
  }

  removeChangeListener() {
    this.changeListener = null;
  }

  callChangeListener() {
    if (this.changeListener !== null) this.changeListener();
  }
}

let instance = null;

function getInstance() {
  if (instance === null) {
    instance = new DataSource();
  }
  return instance;
}

export default getInstance();
