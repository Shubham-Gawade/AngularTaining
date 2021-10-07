const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

const employeeRoutes = require('./api/employee/employee.routes');

mongoose.connect("mongodb+srv://shubhamg_7292:gawade2927@cluster0-cr1db.mongodb.net/EmployeeManagement?retryWrites=true&w=majority", 
{ useNewUrlParser: true,useUnifiedTopology: true }).then((res) =>{
  console.log("Connected");
}).catch((err)=>{
  console.log(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Routes which handle requests
app.use("/employee", employeeRoutes);

module.exports = app;
