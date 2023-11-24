import Employee from "../models/Employee.js";
class EmployeeController{
    static getAllEmployee(){
        return Employee.getEmployee();
    }
    static getEmployee(){
        return Employee.getEmployeeById()
    }
    static getEmployeeById(id){
        return Employee.getEmployeeById(id);
    }
}

export default EmployeeController;