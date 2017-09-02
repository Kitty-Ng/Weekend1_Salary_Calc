console.log('js sourced');

var employees = [];

$(document).ready(readyNow);


function readyNow() {
    $('#addNewEmployeeButton').on('click', addEmployee);
};

function addEmployee () {
    // use input to create new Employee object
    new createNewEmployee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idNumberIn').val(),
        $('#jobTitleIn').val(),
        $('#annualSalaryIn').val()
    )

    // reset inputs
        $('#firstNameIn').val(''),
        $('#lastNameIn').val(''),
        $('#idNumberIn').val(''),
        $('#jobTitleIn').val(''),
        $('#annualSalaryIn').val('')
};

function createNewEmployee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn){
    // create a new employee based on user input
    // push new Employee object into global employees array
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
    employees.push(this);
};



