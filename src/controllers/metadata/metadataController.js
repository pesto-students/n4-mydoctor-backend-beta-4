import MetadataService from "../../services/MetadataService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const metadataController = {
    getSpecializations: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    try {
        MetadataService.getSpecializations(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send(errorResponse(500));
    }
  },
};

export default metadataController;
