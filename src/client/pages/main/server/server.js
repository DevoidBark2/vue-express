import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

import EmployeeController from "./controllers/EmployeeController.js";


app.use(cors());

app.get('/getEmployee' , (req,res) => {
    let employees = EmployeeController.getAllEmployee();
    res.json(employees)
})

app.get('/getEmployeeById/:id' , (req,res) => {
    const id = req.params.id;
    const employee = EmployeeController.getEmployeeById(id)
    res.json(employee)
})

app.get('/employeeDelete/:id' , (req,res) => {
    const id = req.params.id;
    const employee = EmployeeController.getEmployeeById(id)
    res.json(employee)
})


app.listen(port,() => {
    console.log(`App listening on port ${port}`)
})