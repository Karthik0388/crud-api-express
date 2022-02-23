const res = require("express/lib/response");
const StudentSchema = require("../Models/Student");

exports.getAllStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find({});
    res.status(200).json({ message: "Fetched data", payload });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "SERVER ERROR" });
  }
};
exports.getStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: "Fetched Students", payload });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "SERVER ERROR" });
  }
};
exports.createStudents = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = ({ name, std_id, email, courses } = req.body);
    let data = await StudentSchema.create(payload);
    res.status(201).json({ message: "Successfully students created", data });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Server Error" });
  }
};
exports.updateStudents = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        std_id,
        email,
        courses,
      },
      { new: true }
    );
    await payload.save();
    res.status(201).json({ message: "successfully students updated", payload });
  } catch (err) {
    res.status(501).json({ message: "SERVER ERROR" });
  }
};
exports.deleteStudents = async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully students Deleted" });
  } catch (err) {
    res.status(501).json({ message: "SERVER ERROR" });
  }
};
