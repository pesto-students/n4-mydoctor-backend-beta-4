import AuthService from "../../services/AuthService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const authController = {
  signup: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    try {
      AuthService.signup(data, params, query, req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send(errorResponse(500));
    }
  },

  login: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    AuthService.login(data, params, query, req, res);
  },
};

export default authController;
