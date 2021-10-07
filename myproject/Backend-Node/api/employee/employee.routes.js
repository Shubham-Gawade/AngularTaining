const express = require("express");
const router = express.Router();

const EmployeeController = require('./employee.controller');

router.get("/getEmployees", EmployeeController.getEmployees);

router.post("/saveEmployee", EmployeeController.saveEmployee);

router.delete("/deleteEmployee/:_id", EmployeeController.deleteEmployee);

router.get("/getEmployee/:_id", EmployeeController.getEmployee);

router.put("/editEmployee", EmployeeController.editEmployee);

module.exports = router;
