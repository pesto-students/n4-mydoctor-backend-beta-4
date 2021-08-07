import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
  firstName:  String,
  lastName: String,
  contactNumber: String,
  password: String,
  salt: String,
  email: String,
  gender: String,
});

export const Client = mongoose.model('Client', clientSchema);
