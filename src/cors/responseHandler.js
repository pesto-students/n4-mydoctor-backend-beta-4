// 4XX status code related to client side error
// 5XX status code related to server side error

import { ErrorData } from "../constant/ErrorData.js";

function findErrorMessage(status) {
  return (
    ErrorData.ERROR_STATUS_ARRAY.find((v) => v.status == status) || {
      error: "There must be an error",
    }
  );
}

/**
 * Success Reposnse.
 * @param {number} status - Success response status
 * @param {string} succMessage - Success response message
 * @param {any} data - Success response custom data
 */
let successResponse = (status, succMessage, data) => {
  return {
    status,
    message: succMessage,
    data,
  };
};

/**
 * Error Reposnse.
 * @param {Response} res - Send error response
 * @param {number} statusCode - Error Status Code
 */
let errorResponse = (statusCode) => {
  return findErrorMessage(statusCode);
};

export {
  errorResponse,
  successResponse,
};
