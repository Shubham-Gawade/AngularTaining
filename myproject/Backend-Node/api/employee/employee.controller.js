const EmployeeService = require("./employee.service");
const Employees = require("./employee.model");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

exports.getEmployees = async (req, res, next) => {
    try {
      const employees = await EmployeeService.getEmps();
      res.status(200).json({
        employees : employees
      });
      } catch (error) {
      res.status(500).json({
        error,
        message : error.message,
      });
    }
};

exports.getEmployee = async (req, res, next) => {
  try {
    const id = req.params._id;
    const employee = await EmployeeService.getEmp(id);
    res.status(200).json({
      employee : employee
    });
    } catch (error) {
    res.status(500).json({
      error,
      message : error.message,
    });
  }
};


exports.saveEmployee = async (req, res, next) => {
  try {
      const initial = 10001;
      const count = await Employees.countDocuments({});
      const companyEmail = `${req.body.firstname}.${req.body.lastname}@Xoriant.com`;

      const data = new Employees({
        _id: new mongoose.Types.ObjectId(),
        employeeID: initial + count,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        photo: req.body.photo,
        address: req.body.address,
        location: req.body.location,
        gender: req.body.gender,
        age: req.body.age,
        phoneno: req.body.phoneno,
        designation: req.body.designation,
        email: req.body.email,
        companyEmail : companyEmail,
        salary: req.body.salary,
        joiningdate: req.body.joiningdate,
        dateofbirth: req.body.dateofbirth
      });
      const user = await EmployeeService.addEmp(data);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'shubhamiit91@gmail.com',
          pass: 'uhyelyletbcrgksr'
        },
      });
  
      const html = `Hi ${req.body.firstname} ${req.body.lastname},
            Your database has been created in EMS system. Your Employee ID is ${initial+count} and Your Company Email is ${companyEmail}.
            Login into outlook account with your company email.
      Have a good day!`;
  
      const mailOptions = {
        from: 'shubhamiit91@gmail.com',
        to: data.email,
        subject: "Employee Management System",
        text: html,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.status(200).json({
        message: "Employee Added Successfully",
      });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
}};

exports.deleteEmployee = async (req, res, next) => {
    try {
      const id = req.params._id;
      const employees = await EmployeeService.deleteEmp(id);
      res.status(200).json({
        message: "Employee Deleted Successfully",
      });
      } catch (error) {
      res.status(500).json({
        error,
        message : error.message,
      });
    }
};

exports.editEmployee = async (req, res, next) => {
  try {
    const id = req.body._id;
    const data = new Employees({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      photo: req.body.photo,
      address: req.body.address,
      location: req.body.location,
      gender: req.body.gender,
      age: req.body.age,
      phoneno: req.body.phoneno,
      designation: req.body.designation,
      email: req.body.email,
      salary: req.body.salary,
      joiningdate: req.body.joiningdate,
      dateofbirth: req.body.dateofbirth
    });
    
    const employees = await EmployeeService.editEmp(id,data);
    res.status(200).json({
      message: "Employee Edited Successfully",
    });
    } catch (error) {
    res.status(500).json({
      error,
      message : error.message,
    });
  }
};