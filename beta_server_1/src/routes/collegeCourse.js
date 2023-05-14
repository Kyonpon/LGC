import express from "express";
import { collegeModel } from "../models/collegeSchema.js";

const router = express.Router(); // router part of express

//Getting All
router.get("/getall", async (req, res) => {
  try {
    const allColleges = await collegeModel.find();
    res.json(allColleges);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
});

//Getting One
router.get("/:id", getCollegeId, (req, res) => {
  res.send({
    name: res.collegeName.name,
    coe: res.collegeName.coe,
    cte: res.collegeName.cte,
    conah: res.collegeName.conah,
    cas: res.collegeName.cas,
  });
});

//Creating One
router.post("/post", async (req, res) => {
  const college = new collegeModel({
    name: req.body.name,
    coe: req.body.coe,
    conah: req.body.conah,
    cas: req.body.cas,
    cte: req.body.cte,
  });

  try {
    const newCollege = await college.save();
    res.status(201);
    res.json(newCollege);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
});

// Updating One
//MODFIY THIS
router.patch("/:id", getCollegeId, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name; // check getting one on how the re.user.<json value> works
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.json({
      user: updatedUser,
      message: "Successfully updated!",
    });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
});

//Deleting One
//MODFIY THIS
router.delete("/:id", getCollegeId, async (req, res) => {
  try {
    await res.collegeName.deleteOne();
    res.json({ message: "college deleted" });
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
  }
});

// middleware functions for getting the id of a user
async function getCollegeId(req, res, next) {
  let collegeName;
  try {
    // like a get request
    //the req here is /:id
    collegeName = await collegeModel.findById(req.params.id);
    if (collegeName == null) {
      res.status(404);
      res.json({ message: "college not found" });
      return;
    }
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
    return;
  }

  res.collegeName = collegeName;
  next();
}

//THIS IS FOR 1.2 CLIENT ONLY
//Getting One by college name
router.get("/getByName/:name", getCollegeName, (req, res) => {
  res.send({
    name: res.collegeName.name,
    coe: res.collegeName.coe,
    cte: res.collegeName.cte,
    conah: res.collegeName.conah,
    cas: res.collegeName.cas,
  });
});

// middleware functions for getting the college by name
async function getCollegeName(req, res, next) {
  let collegeName;
  try {
    // like a get request
    //the req here is /:id
    collegeName = await collegeModel.findOne({ name: req.params.name });
    if (collegeName == null) {
      res.status(404);
      res.json({ message: "college not found" });
      return;
    }
  } catch (error) {
    res.status(500);
    res.json({ message: error.message });
    return;
  }

  res.collegeName = collegeName;
  next();
}
//END OF 1.2 CLIENT

export { router as collegeAPI };
