'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesFixedSalary = parseSalary(employees);
const employeesList = document.querySelector('ul');
const sortedEmployeesBySalary = sortEmployeesBySalary(employeesFixedSalary);

updateEmployeesList(sortedEmployeesBySalary);

function sortEmployeesBySalary(employees) {
  return employees.sort((a, b) => {
    return a.dataset.salary - b.dataset.salary;
  });
}

function parseSalary(employees) {
  const newEmployees = [...employees];

  for (const employee of employees) {
    const newDataSalaryValue = employee.dataset.salary
      .replace('$', '')
      .replace(',', '');

    employee.dataset.salary = newDataSalaryValue;
  }

  return newEmployees;
}

function updateEmployeesList(employees) {
  employeesList.textContent = '';

  for (const employee of employees) {
    employeesList.append(employee);
  }
}
