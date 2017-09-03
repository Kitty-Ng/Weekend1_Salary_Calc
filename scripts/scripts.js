console.log('js sourced');

var employeesArray = [];

$(document).ready(readyNow);

function readyNow() {
    $('#addNewEmployeeButton').on('click', addEmployee);
};

// ---------

function addEmployee() {
    // use input to create new Employee object
    // push new Employee object into global employeesArray
    var newEmployee = new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idNumberIn').val(),
        $('#jobTitleIn').val(),
        $('#annualSalaryIn').val()
    );

    employeesArray.push(newEmployee);

    // reset inputs
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idNumberIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');

    // once newEmployee is created, append the data to employeeTable
        $('#employeeTable').append('<tr><td>' + newEmployee.firstName + '</td><td>' + newEmployee.lastName + '</td><td>' + newEmployee.idNumber + '</td><td>' + newEmployee.jobTitle + '</td><td>' + newEmployee.annualSalary + '</td><td>' + newEmployee.monthlySalary + '</td></tr>');

};

function Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn){
    // create a new Employee object based on user input
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;

     //calculate monthly salary and add into new Employee Object
    this.monthlySalary = Math.ceil((annualSalaryIn / 12) * 100) / 100;
};