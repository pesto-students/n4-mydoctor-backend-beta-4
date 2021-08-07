import { Doctor } from "../models/doctor.js";

const DoctorDetailsService = {
  getDoctorDetails: async () => {
    return new Promise((resolve, reject) => {
      Doctor.find({}).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  getDoctorDetailsById: async (id) => {
    return new Promise((resolve, reject) => {
      Doctor.find({ _id: id }).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createDoctorDetails: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      const doctorDetails = new Doctor(data);
      doctorDetails.save((err) => {
        if (err) reject(err);
        resolve("Created successfully");
      });
    });
  },
  updateDoctorDetails: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
};

export default DoctorDetailsService;
