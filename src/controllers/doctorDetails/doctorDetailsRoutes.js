import { Router } from "express";
import { Routes } from "../../constant/Routes.js";
import { checkToken } from "../../cors/middleware.js";
import doctorDetailsController from "./doctorDetailsController.js";
import DoctorDetailsValidation from "./../../validation/DoctorDetailsValidation.js";

const router = Router();
const doctorDetailsRoutes = (app) => {
  router.route("/").get(doctorDetailsController.getDoctorDetails);

  router.route("/:doctorId").get(doctorDetailsController.getDoctorDetailsById);

  router
    .route("/create")
    .post(
      DoctorDetailsValidation.create(),
      doctorDetailsController.createDoctorDetails
    );

  router
    .route("/update")
    .post(
      DoctorDetailsValidation.update(),
      doctorDetailsController.updateDoctorDetails
    );

  app.use(Routes.DOCTOR_DETAILS_AND_SLOTS, router);
};

export default doctorDetailsRoutes;
