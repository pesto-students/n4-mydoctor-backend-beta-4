import jwt from "jsonwebtoken";
import crypto from "crypto";
const APP_SECRET = 'mydoctor-app-sectet';

export const getTokenPayload = (token) => {
  return jwt.verify(token, APP_SECRET);
}

export const generateToken = (userId) => {
  return jwt.sign({ userId: userId }, APP_SECRET);
}

export const encryptPassword = (password, salt) => {
    return crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');
}

export const getUserId = (req, authToken) => {
    if (req) {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
          throw new Error('No token found');
        }
        const { userId } = getTokenPayload(token);
        return userId;
      }
    } else if (authToken) {
      const { userId } = getTokenPayload(authToken);
      return userId;
    }
  
    throw new AuthenticationError('Not authenticated');
}
  

export const checkPassword = (password, salt, hashedPassword) => {
    return encryptPassword(password, salt) === hashedPassword;
}

export {
    APP_SECRET
};
