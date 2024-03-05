// Get a reference to the #add-employees-btn elemen



// Get the add employee button
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//creating a click listener for the add emplpoyee button
addEmployeesBtn.addEventListener('click', function(){
  // telling the function to keep going until line 18 is false or "cancel"
    let keepgoing = true;
    let employeedata = []
    do { 
      //display the prompt to gather employee first name
    let employeefirstname = prompt('firstName');
    console.log(employeefirstname);
    let employeelastname = prompt('lastName');
    console.log(employeelastname)
    let employeesalary = prompt('salary');
    console.log(employeesalary)
    //add collected employee info to a employee data array
    let alldata = {
      first:employeefirstname,
      last:employeelastname,
      salary:employeesalary
    }
    employeedata.push(alldata)
    console.log(employeedata[employeedata.length - 1])
    //when continue is clicked, aka "true" the loop runs again with the "dywtc' prompt
    keepgoing = confirm('do you want to continue');
  } while (keepgoing);
  console.log(employeedata);
});











// Collect employee data
const collectEmployees = function() {
const firstName = prompt("first name")
 console.log(firstName);

  // TODO: Get user input to create and return an array of employee objects
}
const employee = {
  firstName: firstName,
  lastName: 0,
  salary: 0 ,
};

// const options = 

let firstName = window.prompt("Enter firstName:"); 

// firstName = firstName.prompt("firstname")

/*
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
