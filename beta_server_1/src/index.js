import express from "express";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect(
  "mongodb://127.0.0.1:27017/LagunaCourseCompass?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("connection to db"));

const app = express();
app.use(cors());
app.use(express.json());

import { collegeAPI } from "./routes/collegeCourse.js";
app.use("/colleges", collegeAPI);

app.listen(3001, () => {
  console.log("SERVER STARTED IN PORT 3001");
});
