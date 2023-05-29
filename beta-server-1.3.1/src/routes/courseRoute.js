import express from "express";
const router = express.Router();
import { collegeModel } from "../models/collegeSchema.js";

// Route to get all the bachelor degrees across all departments
router.get("/bachelors", async (req, res) => {
  try {
    const universities = await collegeModel.find({});
    const bachelorsSet = new Set();
    universities.forEach((university) => {
      university.coe.forEach((degree) => bachelorsSet.add(degree));
      university.conah.forEach((degree) => bachelorsSet.add(degree));
      university.cas.forEach((degree) => bachelorsSet.add(degree));
      university.cte.forEach((degree) => bachelorsSet.add(degree));
    });
    const bachelors = Array.from(bachelorsSet);
    res.json({ bachelors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to search for names with a specific bachelor
router.get("/search", async (req, res) => {
  try {
    const bachelor = req.query.bachelor;

    const universities = await collegeModel.find(
      {
        $or: [
          { coe: bachelor },
          { conah: bachelor },
          { cas: bachelor },
          { cte: bachelor },
        ],
      },
      { name: 1 }
    );

    const names = universities.map((university) => university.name);
    res.json({ names });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/coe", async (req, res) => {
  try {
    const universities = await collegeModel.find({});
    const bachelorsSet = new Set();
    universities.forEach((university) => {
      university.coe.forEach((degree) => bachelorsSet.add(degree));
    });
    const bachelors = Array.from(bachelorsSet);
    res.json({ bachelors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/conah", async (req, res) => {
  try {
    const universities = await collegeModel.find({});
    const bachelorsSet = new Set();
    universities.forEach((university) => {
      university.conah.forEach((degree) => bachelorsSet.add(degree));
    });
    const bachelors = Array.from(bachelorsSet);
    res.json({ bachelors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cas", async (req, res) => {
  try {
    const universities = await collegeModel.find({});
    const bachelorsSet = new Set();
    universities.forEach((university) => {
      university.cas.forEach((degree) => bachelorsSet.add(degree));
    });
    const bachelors = Array.from(bachelorsSet);
    res.json({ bachelors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cte", async (req, res) => {
  try {
    const universities = await collegeModel.find({});
    const bachelorsSet = new Set();
    universities.forEach((university) => {
      university.cte.forEach((degree) => bachelorsSet.add(degree));
    });
    const bachelors = Array.from(bachelorsSet);
    res.json({ bachelors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router as testAPI };
