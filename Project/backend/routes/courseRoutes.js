const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// GET all course items
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to get course items" });
  }
});

// POST create a new course item
router.post("/", async (req, res) => {
  try {
    const { title, description, status, date } = req.body;

    const newCourse = new Course({
      title,
      description,
      status,
      date,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: "Failed to create course item" });
  }
});

// PUT update a course item
router.put("/:id", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: "Failed to update course item" });
  }
});

// DELETE a course item
router.delete("/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete course item" });
  }
});

module.exports = router;