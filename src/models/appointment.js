import mongoose from "mongoose";
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  slotDateId: {
    type: Schema.Types.ObjectId,
  },
  timeId: {
    type: Schema.Types.ObjectId,
  },
  date: Date,
  startTime: String,
  endTime: String,
  appointmentStatus: {
    type: String,
    enum: ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"],
    default: "NOT_STARTED",
  },
  transactionDate: Date,
  otherName: String,
  otherMobileNumber: String,
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
