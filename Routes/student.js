const { Router } = require("express");
const {
  createStudents,
  getAllStudents,
  getStudents,
  updateStudents,
  deleteStudents,
} = require("../Controllers/student");
const router = Router();
router.route("").get(getAllStudents).post(createStudents);
router
  .route("/:id")
  .get(getStudents)
  .put(updateStudents)
  .delete(deleteStudents);

module.exports = router;
