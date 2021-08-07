import UserService from "../../services/UserService.js";
import { errorResponse, successResponse } from "../../cors/responseHandler.js";
import { validationResult } from "express-validator";

const userController = {
  getUsers: async (req, res) => {
    try {
      let result = await UserService.getUsers();
      res.status(200).send(successResponse(200, result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      let result = await UserService.getUserById(userId);
      res.status(200).send(successResponse(200, result));
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },
  createUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    try {
      let result = await UserService.createUser(data, params, query);
      res
        .status(201)
        .send(
          successResponse(
            201,
            "User Created",
            "User has been created successfully"
          )
        );
    } catch (error) {
      console.error(error);
      res.status(502).send(errorResponse(502));
    }
  },

  updateUser: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;
    UserService.updateUser(data, params, query)
      .then((result) => {
        res
          .status(201)
          .send(
            successResponse(
              201,
              "User Updated",
              "User has been updated successfully"
            )
          );
      })
      .catch((error) => {
        console.error(error);
        res.status(502).send(errorResponse(502));
      });
  },
  getProfile: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).send(errorResponse(402));
    }
    let data = req.body;
    let params = req.params;
    let query = req.query;

    try {
      UserService.getProfile(data, params, query, req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send(errorResponse(500));
    }
  },
};

export default userController;
