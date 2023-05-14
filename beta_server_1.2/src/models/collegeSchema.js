import mongoose from "mongoose";

// This creates a new schema on what the items on DB should look like
const collegeSchm = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coe: [
    {
      type: String,
    },
  ],
  conah: [
    {
      type: String,
    },
  ],
  cas: [
    {
      type: String,
    },
  ],
  cte: [
    {
      type: String,
    },
  ],
});

// Syntax
// <shows what would be the name when imported> = mongoose.model("<the name of the collection>", <the name of the model>)
export const collegeModel = mongoose.model("collegeCLC", collegeSchm);
