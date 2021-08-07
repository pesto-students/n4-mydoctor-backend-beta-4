import { Router } from "express";
import { Routes } from "../../constant/Routes.js";
import { checkToken } from "../../cors/middleware.js";
import paymentsController from "./paymentController.js";

const router = Router();
const paymentRoutes = (app) => {
  router.route("/").post(paymentsController.createPayment);

  app.use(Routes.PAYMENT, checkToken, router);
};

export default paymentRoutes;
