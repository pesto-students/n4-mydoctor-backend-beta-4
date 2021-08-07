import { Router } from "express";
import DoctorsController from "./doctorsController.js";

const router = Router();
const doctorsRoutes = (app) => {
    router
    .route("/")
    .post(DoctorsController.getDoctors);

  app.use("/doctors", router);
};

export default doctorsRoutes;
