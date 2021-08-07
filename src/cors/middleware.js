import jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils/authUtils.js";
import { errorResponse, successResponse } from "./responseHandler.js";

export function checkToken(req, res, next) {
  let token = req.headers["authorization"].replace("Bearer ", "");
  if (token) {
    jwt.verify(
      token,
      APP_SECRET,
      {
        ignoreExpiration: true,
      },
      (err, decoded) => {
        if (err) {
          return res.status(414).send(errorResponse(414));
        } else {
          decoded.isAdminUser = false;
          req.decoded = decoded;
          next();
        }
      }
    );
  } else {
    return res.status(415).send(errorResponse(415));
  }
}
