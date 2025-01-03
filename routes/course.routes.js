const express = require("express");
const courseController = require("../controllers/course.controller");

const router = express.Router();

//COURSE CRUD
router.post("/create-course", courseController.createCourse);
router.get("/get-all-course", courseController.getAllCourse);
router.get("/get-all-course-for-product",courseController.getAllCourseForProduct);  
router.put("/edit-course/:id", courseController.updateCourse);
router.delete("/delete-course/:id", courseController.deleteCourse);

//CHAPTER CRUD
router.post("/create-chapter", courseController.createChapter);
router.get("/chapter-by-course/:id", courseController.getChapters);
router.put("/edit-chapter/:id", courseController.updateChapter);
router.delete("/delete-chapter/:id", courseController.deleteChapter);
router.post("/instructors", courseController.getInstructorsByCourseId);

//LECTURE CRUD
router.post("/create-lecture", courseController.createLecture);
router.get("/get-all-lecture/:id", courseController.getLectures);
router.put("/edit-lecture/:id", courseController.updateLecture);
router.delete("/delete-lecture/:id", courseController.deleteLecture);

//NOTE CRUD
router.post("/create-note", courseController.createNotes);
router.get("/get-all-note/:id", courseController.getNotes);
router.put("/edit-note/:id", courseController.updateNotes);
router.delete("/delete-note/:id", courseController.deleteNotes);


module.exports = router;