import AppointmentService from "../../services/AppointmentService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const appointmentsController = {
  getAppointments: async (req, res) => {
    try {
      let userId = req.params.userId;
      if (!userId) {
        return res.status(400).send('Invalid userId.');
      }
      let result = await AppointmentService.getAppointments(userId);
      res.status(200).send(successResponse(200, "", result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  getAppointmentDetails: async (req, res) => {
    try {
      let appointmentId = req.params.appointmentId;
      let result = await AppointmentService.getAppointmentDetails(appointmentId);
      return res.status(200).send(successResponse(200, "", result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  getAppointmentsOld: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    try {
      AppointmentService.getAppointments(data, params, query, req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send(errorResponse(500));
    }
  },
  bookAppointment: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      AppointmentService.bookAppointment(data, params, query, req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send(errorResponse(500));
    }
  }
};

export default appointmentsController;