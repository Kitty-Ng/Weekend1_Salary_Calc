console.log('js sourced');

var employeesArray = [];

$(document).ready(readyNow);

function readyNow() {
    $('#addNewEmployeeButton').on('click', addEmployee);
};

// ---------

function addEmployee() {
    // use input to create new Employee object
    //push new Employee object into global employeesArray
    employeesArray.push(new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idNumberIn').val(),
        $('#jobTitleIn').val(),
        $('#annualSalaryIn').val()
    ));

    // reset inputs
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idNumberIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');
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
