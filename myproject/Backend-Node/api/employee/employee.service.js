const mongoose = require("mongoose");
const Employees = require("./employee.model");

exports.getEmps = async () => {
  const employee = await Employees.find({});
  if(employee) {
    return employee
  } else {
    throw new Error("No data found");
  }
};

exports.getEmp = async (id) => {
  const employee = await Employees.findOne({_id : id});
  if(employee) {
    return employee
  } else {
    throw new Error("No data found");
  }
};

exports.addEmp = async (empData) => {
  const employee = await Employees.findOne({ email: empData.email });
  if (employee) {
    throw new Error("Email already exist");
  } else {
    return await empData.save();
  }
};

exports.deleteEmp = async (id) => {
  const employee = await Employees.deleteOne({ _id:id });
  if (employee) {
    return employee;
  } else {
    return false;
  }
};

exports.editEmp = async (id, emp) => {
  const employee = await Employees.updateOne({ _id:id },{$set : emp});
  if (employee) {
    return employee;
  } else {
    return false;
  }
};