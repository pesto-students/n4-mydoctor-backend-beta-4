import { Message } from "../models/chat.js";

const ChatService = {
  getChat: async (appointmentId) => {
    return new Promise((resolve, reject) => {
      Message.find({ appointmentId }).exec((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
};

export default ChatService;
