import mongoose from "mongoose";

const distSchm = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SantaCruz: { type: Number, required: true },
  Pila: { type: Number, required: true },
  Pagsanjan: { type: Number, required: true },
  Lumban: { type: Number, required: true },
  Majayjay: { type: Number, required: true },
  LosBaños: { type: Number, required: true },
  SanPablo: { type: Number, required: true },
  Siniloan: { type: Number, required: true },
  Calamba: { type: Number, required: true },
  SantaRosa: { type: Number, required: true },
  Cabuyao: { type: Number, required: true },
});

export const distModel = mongoose.model("collegeDistCLC", distSchm);
