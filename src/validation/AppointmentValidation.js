import { body, check } from "express-validator";

const AppointmentValidation = {
  get: () => {
    return [
      check("clientId", "Client ID is required!").not().isEmpty(),
    ];
  },
  book: () => {
    return [
      check("clientId", "Client ID is required!").not().isEmpty(),
      check("doctorId", "Doctor ID is required!").not().isEmpty(),
      check("date", "Date is required!").not().isEmpty(),
      check("startTime", "Start time is required!").not().isEmpty(),
      check("endTime", "End time is required!").not().isEmpty(),
      check("transactionDate", "Transaction date is required!").not().isEmpty(),
    ];
  }
}

export default AppointmentValidation;