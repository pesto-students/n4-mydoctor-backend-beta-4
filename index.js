import { Specialization } from './src/models/specialization.js';
import mongoose from 'mongoose';
const express = require("express");
const app = express();
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.3o43c.mongodb.net/myDoctorDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  console.log('Connected successfully...');
  const data = await Specialization.find({}).exec();
  console.log(data);
});