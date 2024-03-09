// Get a reference to the #add-employees-btn elemen

// Get the add employee button
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//creating a click listener for the add emplpoyee button
const collectEmployees = function(){
  // telling the function to keep going until line 18 is false or "cancel"
    let keepgoing = true;
    let employeedata = [];
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
      firstName:employeefirstname,
      lastName:employeelastname,
      salary:employeesalary
    }
    employeedata.push(alldata)
    console.log(employeedata[employeedata.length - 1])
    //when continue is clicked, aka "true" the loop runs again with the "dywtc' prompt
    keepgoing = confirm('do you want to continue');
  } while (keepgoing);

  return employeedata;
};


  const displayAverageSalary = function(employeedata) {
    let sumemployeesalary = 0;
       //defining the variables to store the sum of employee salaries to divide by the amount of employees
    let numberofemployees = employeedata.length;
    //add the employee salaries and dividing by the amount of employees
     for(let employeecounter = 0; employeecounter < numberofemployees; employeecounter++) {
        sumemployeesalary += Number(employeedata[employeecounter].salary)
        //for loop going from 0 to the number of employees 
     }
     let average = (sumemployeesalary/ numberofemployees) 
     console.log('The averge employee salary'+average);
   


  }

  // TODO: Get user input to create and return an array of employee objects


// Select a random employee
 const getRandomEmployee = function(employeesArray) {
  var randomValue = Math.floor(employeesArray.length * Math.random())
  console.log('Congratulations to',employeesArray[randomValue].firstName + " " +  employeesArray[randomValue].lastName, ', our random drawings winner!')
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
