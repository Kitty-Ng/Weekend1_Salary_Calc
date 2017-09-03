console.log('js sourced');

var employees = [];

$(document).ready(readyNow);

function readyNow() {
    $('#addNewEmployeeButton').on('click', addEmployee);
};

function addEmployee() {
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
    // create a new Employee object based on user input
    // push new Employee object into global employees array
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
    employees.push(this)
}

function calMonthlySalary(employees) {
    for (var i = 0; i < employees.length; i++) {
        var monthlySalary = annualSalary % 12;
        monthlySalary.toFixed(2);
        employees.push(monthlySalary);
    };

// function printAllEmployees(employees) {
//     //print and append all Employees in the array to the table
//     for(var i = 0; i < employees.length; i++ ){
//         $('table').append($('<tr>', {id: 'employeeTable'}));
//         $('table').last().this.firstName;
//         $('table').last().lastNameIn();
//     }
// }