import { body, check } from "express-validator";

const DoctorDetailsValidation = {
  create: () => {
    return [check("firstName", "Name is required!").not().isEmpty()];
  },

  update: () => {
    return [
      check("firstName", "Name is Mandatory Parameter Missing.")
        .not()
        .isEmpty(),
    ];
  },
};

export default DoctorDetailsValidation;
