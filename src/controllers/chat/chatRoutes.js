import { Router } from "express";
import ChatController from "./chatController.js";
import { Routes } from "../../constant/Routes.js";
import { checkToken } from "../../cors/middleware.js";

const router = Router();
const chatRoutes = (app) => {
    router
    .route("/:appointmentId")
    .get(ChatController.getChat);

  app.use(Routes.CHAT, checkToken, router);
};

export default chatRoutes;
