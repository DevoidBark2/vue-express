import db from "../../db.js";

function generateUniqueId() {

}

class Employee{
    static getEmployee(){
        return db;
    }
    static getEmployeeById(id){
        return db.find((employee) => employee.id.toString() === id);
    }
    static addNewEmployee(data){
        const newEmployee = {
            id: generateUniqueId(), // Генерация уникального id
            name: data.name,
            email: data.email,
            // Другие поля с данными сотрудника
        };
        db.push(newEmployee);
        return newEmployee;
    }

    static updateEmployee(id, data) {
        // Обновляет данные сотрудника по заданному id
        const employeeIndex = db.findIndex((employee) => employee.id === id);
        if (employeeIndex !== -1) {
            const updatedEmployee = { ...db[employeeIndex], ...data };
            db[employeeIndex] = updatedEmployee;
            return updatedEmployee;
        }
        return null;
    }

    static deleteEmployee(id) {
        // Удаляет сотрудника по заданному id
        const employeeIndex = db.findIndex((employee) => employee.id === id);
        if (employeeIndex !== -1) {
            const deletedEmployee = db.splice(employeeIndex, 1);
            return deletedEmployee;
        }
        return null;
    }
}

export default Employee;