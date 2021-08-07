import { body, check } from 'express-validator';

const AuthValidation = {
  login: () => {
    return [
      check("username", "Username is required!").not().isEmpty(),
      check("password", "Password is required!").not().isEmpty(),
    ]
  },

  signup: () => {
    return [
      check('firstName', 'firstName is Mandatory Parameter Missing.').not().isEmpty(),
      check('contactNumber', 'contactNumber is Mandatory Parameter Missing.').not().isEmpty(),
      check('gender', 'gender is Mandatory Parameter Missing.').not().isEmpty(),
      check('password', 'password is Mandatory Parameter Missing.').not().isEmpty(),
    ]
  }
};

export default AuthValidation;