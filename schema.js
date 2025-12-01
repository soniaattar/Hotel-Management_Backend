const mongoose = require("mongoose");
const PatientsSchema = new mongoose.Schema({
  fullname: String,
  mobilenumber: Number,
  email: [String],
  appointmentdate: String,
  area: String,
  city: String,
  state: String,
  postalcode: Number,
});
module.exports = mongoose.model("Patients_Data", PatientsSchema, "Patients_Data");
