console.log('js sourced');

var employees = [];

function addEmployee() {
    // use input to create new Employee object
    new createNewEmployee(
        $('#firstName').val(),
        $('#lastName').val(),
        $('#idNumber').val(),
        $('#jobTitle').val(),
        $('#annualSalary').val()
    )

    // reset the inputs
    $('#firstName').val('First Name'),
    $('#lastName').val('Last Name'),
    $('#idNumber').val('ID number'),
    $('#jobTitle').val('Job Title'),
    $('#annualSalary').val('Annual Salary'),
}
    

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


