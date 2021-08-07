import { Router } from "express";
import MetadataController from "./metadataController.js";

const router = Router();
const specializationsRoutes = (app) => {
    router
    .route("/specializations")
    .get(MetadataController.getSpecializations);

  app.use("/metadata", router);
};

export default specializationsRoutes;
