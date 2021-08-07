import { Router } from "express";
import AuthController from "./authController.js";
import AuthValidation from "../../validation/AuthValidation.js";

const router = Router();
const authRoutes = (app) => {
    router
    .route("/login")
    .post(AuthValidation.login() ,AuthController.login);

  router
    .route("/signup")
    .post(AuthValidation.signup() ,AuthController.signup);

  app.use("/", router);
};

export default authRoutes;
