import { errorResponse, successResponse } from "../cors/responseHandler.js";
import { Appointment } from "../models/appointment.js";
import { Client } from "../models/client.js";
import { Doctor } from "../models/doctor.js";
import pkg from "mongoose";

const { ObjectId } = pkg.Types;

const AppointmentService = {
  bookAppointment: async (data, params, query, req, res) => {
    let clientExists, doctorExists;
    try {
      clientExists = await Client.exists({ _id: data.clientId });
    } catch (err) {
      clientExists = false;
    }
    if (!clientExists) {
      res.status(418).send(errorResponse(418));
      return;
    }
    try {
      doctorExists = await Doctor.exists({ _id: data.doctorId });
    } catch (err) {
      doctorExists = false;
    }
    if (!doctorExists) {
      res.status(419).send(errorResponse(419));
      return;
    }
    const appointment = new Appointment(data);
    console.log("appointment data is :");
    console.log(data);
    await appointment.save();
    res
      .status(201)
      .send(
        successResponse(
          201,
          "Appointment Booked",
          "Appointment has been booked successfully"
        )
      );
    return;
  },
  getAppointments: async (userId) => {
    return new Promise((resolve, reject) => {
      Appointment.find({
        $or: [
          { clientId: new ObjectId(userId) },
          { doctorId: new ObjectId(userId) },
        ],
      })
        .populate("doctorId", ["firstName", "lastName", "imageUrl"])
        .populate("clientId", ["firstName", "lastName", "imageUrl"])
        .exec((err, data) => {
          if (err) reject(err);
          resolve(data);
        });
    });
  },
  getAppointmentDetails: async (appointmentId) => {
    return new Promise((resolve, reject) => {
      Appointment.findById(appointmentId).populate('doctorId', ['firstName', 'lastName', 'imageUrl']).populate('clientId', ['firstName', 'lastName', 'profileImage']).exec(
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  },
  getAppointmentsOld: async (data, params, query, req, res) => {
    const perPage = 10;
    const page = data.page;
    const sort = data.sort;
    const clientId = data.clientId;
    Appointment.find({ clientId })
      .limit(perPage)
      .skip(page ? perPage * (page - 1) : 0)
      .sort(sort || {})
      .exec(function (err, appointments) {
        Appointment.countDocuments({ clientId }).exec(function (
          errCount,
          count
        ) {
          res.status(200).send({
            data: appointments,
            page: page,
            pages: Math.ceil(count / perPage),
          });
        });
      });
  },
};

export default AppointmentService;
