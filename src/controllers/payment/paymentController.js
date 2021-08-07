import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";
import PaymentService from "../../services/PaymentService.js";

const paymentsController = {
  createPayment: async (req, res) => {
    try {
      let result = await PaymentService.getPayments(req, res);
      res.status(200).send(successResponse(200, result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
};

export default paymentsController;
