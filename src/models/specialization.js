import mongoose from 'mongoose';
const { Schema } = mongoose;

export const specializationSchema = new Schema({
  name:  String
});

export const Specialization = mongoose.model('Specialization', specializationSchema);