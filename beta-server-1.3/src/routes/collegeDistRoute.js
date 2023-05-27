import express from "express";
const router = express.Router();
import { distModel } from "../models/collegeDistSchema.js";

//Getting all
router.get("/getAll", async (req, res) => {
  try {
    const allDist = await distModel.find();
    res.json(allDist);
  } catch (error) {
    res.status(404);
    res.json({ message: error.message });
  }
});

//Creating one
router.post("/post", async (req, res) => {
  const dist = new distModel({
    name: req.body.name,
    SantaCruz: req.body.SantaCruz,
    Pila: req.body.Pila,
    Pagsanjan: req.body.Pagsanjan,
    Lumban: req.body.Lumban,
    Majayjay: req.body.Majayjay,
    LosBaños: req.body.LosBaños,
    SanPablo: req.body.SanPablo,
    Siniloan: req.body.Siniloan,
    Calamba: req.body.Calamba,
    SantaRosa: req.body.SantaRosa,
    Cabuyao: req.body.Cabuyao,
  });

  try {
    const newDist = await dist.save();
    res.status(201).json(newDist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function fetchDataByField(req, res, field) {
  try {
    const result = await distModel.find({}, { [field]: 1, name: 1 });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Define endpoints to fetch specific fields
router.get("/stc", (req, res) => fetchDataByField(req, res, "SantaCruz"));
router.get("/pila", (req, res) => fetchDataByField(req, res, "Pila"));
//////////////////////////////////////////////////////
router.get("/:field", async (req, res) => {
  const field = req.params.field;

  try {
    const result = await distModel.find({}, { [field]: 1, name: 1 });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.get("/test/:field", async (req, res) => {
//   const field = req.params.field;

//   try {
//     const result = await distModel.find({}, { [field]: 1, name: 1 });

//     // Get the names to omit from the query parameter
//     const omitNames = req.query.omit || [];

//     // Filter the result array to omit the specified names
//     const filteredResult = result.filter(
//       (item) => !omitNames.includes(item.name)
//     );

//     res.json(filteredResult);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

router.get("/test/:field", async (req, res) => {
  const field = req.params.field;

  try {
    const result = await distModel.find({}, { [field]: 1, name: 1 });

    // Get the names to include from the query parameter
    const includeNames = req.query.include || [];

    // Filter the result array to include only the specified names
    const filteredResult = result.filter((item) =>
      includeNames.includes(item.name)
    );

    res.json(filteredResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as distAPI };
