const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    employeeID: { type: String, required: true, },
    firstname: { type: String, required: true, },
    lastname: { type: String, required: true, },
	photo: { type: String, required: true, },
    address: { type: String, required: true },
    location: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    phoneno: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    companyEmail: { type: String, required: true },
    salary: { type: String, required: true },
    joiningdate: { type: String, required: true },
    dateofbirth: { type: String, required: true }
});

module.exports = mongoose.model('employees', employeeSchema);