import DoctorDetailsService from "../../services/DoctorDetailsAndSlotsService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const doctorDetailsController = {
  getDoctorDetails: async (req, res) => {
    try {
      let result = await DoctorDetailsService.getDoctorDetails();
      res.status(200).send(successResponse(200, result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  getDoctorDetailsById: async (req, res) => {
    try {
      const { doctorId } = req.params;
      let result = await DoctorDetailsService.getDoctorDetailsById(doctorId);
      res.status(200).send(successResponse(200, result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  createDoctorDetails: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    try {
      let result = await DoctorDetailsService.createDoctorDetails(
        data,
        params,
        query
      );
      res
        .status(201)
        .send(
          successResponse(
            201,
            "Doctor details Created",
            "doctor details has been created successfully"
          )
        );
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },

  updateDoctorDetails: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    DoctorDetailsService.updateDoctorDetails(data, params, query)
      .then((result) => {
        res
          .status(201)
          .send(
            successResponse(
              201,
              "Doctor Details Updated",
              "Doctor details has been updated successfully"
            )
          );
      })
      .catch((error) => {
        console.error(error);
        res.status(502).send(errorResponse(502));
      });
  },
};

export default doctorDetailsController;
