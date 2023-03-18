// Write your solution in this file
const employee={
    employeeName:'sam',
    streetAddress:'11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const employeeDetails={...employee}
    employeeDetails[key]=value
    return employeeDetails

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const employeeDetails={...employee}
    delete employeeDetails[key]
    return employeeDetails;

}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    // const employeeDetails={...employee}
    delete employee [key]
    return employee
}