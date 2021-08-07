import { Client } from "../models/client.js";
import { errorResponse } from "../cors/responseHandler.js";

const UserService = {
  getUsers: async () => {
    return new Promise((resolve, reject) => {
      Client.find({}).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  getUserById: async (id) => {
    return new Promise((resolve, reject) => {
      Client.findOne({ _id: id }).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      const user = new Client(data);
      user.save((err) => {
        if (err) reject(err);
        resolve("Created successfully");
      });
    });
  },
  updateUser: async (data, params, query) => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  },
  getProfile: async (data, params, query, req, res) => {
    let clientExists = false;
    try {
      clientExists = await Client.exists({ _id: query.id });
    } catch (error) {
      clientExists = false;
    }
    if (!clientExists) {
      res.status(407).send(errorResponse(407));
      return;
    }
    const client = await Client.findById(query.id).exec();
    res.status(200).send(client);
  },
};

export default UserService;
