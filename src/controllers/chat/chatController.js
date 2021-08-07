import ChatService from "../../services/ChatService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const chatController = {
  getChat: async (req, res) => {
    try {
      let appointmentId = req.params.appointmentId;
      if(!appointmentId){
          return res.status(400).send('Invalid appointment id.');
      }
      let result = await ChatService.getChat(appointmentId);
      res.status(200).send(successResponse(200, '', result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
};

export default chatController;
