console.log('js sourced');

var employeesArray = [];

$(document).ready(readyNow);

function readyNow() {
    $('#addNewEmployeeButton').on('click', addEmployee);
    $("#deleteEmployeeButton").on('click', deleteEmployee);
};

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
        $('#employeeTable').append('<tr><td>' + newEmployee.firstName + '</td><td>' + newEmployee.lastName + '</td><td>' + newEmployee.idNumber + '</td><td>' + newEmployee.jobTitle + '</td><td>' + newEmployee.annualSalary + '</td><td>' + newEmployee.monthlySalary + '</td><td><div><input id="checkBox" type="checkbox" value = "true"></div></td></tr>');

    // append totalMonthlyCost to #monthlyCost
    $('#monthlyCost').html('<p>'+'Total Monthly Costs: $'+calTotalMonthlyCost(employeesArray)+'</p>')
    
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

function calTotalMonthlyCost(){
    // recalculate the monthlyCost across the global employeesArray
    // loop through global employeesArray and grab the monthlySalary -> then push into monthlyCost
    //loop through monthlyCost and sum all values to become totalMonthlyCost
    var totalMonthlyCost = 0;
    for (i = 0; i < employeesArray.length; i++){
        var monthlySalaryArray = [];
        monthlySalaryArray.push(employeesArray[i].monthlySalary);

        for (var x = 0; x < monthlySalaryArray.length; x++){
            totalMonthlyCost += monthlySalaryArray[x];
        };
    
    }; 
    return totalMonthlyCost;
};

function deleteEmployee(){
    //for all selected employees, delete the closest tr from DOM
    $('td input:checked').closest('tr').remove();
};

