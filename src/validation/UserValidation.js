import { body, check, query } from 'express-validator';

const UserValidation = {
  create: () => {
    return [
      check("firstName", "Name is required!").not().isEmpty(),
    ]
  },

  update: () => {
    return [
      check('firstName', 'Name is Mandatory Parameter Missing.').not().isEmpty()
    ]
  },
  
  profile: () => {
    return [
      query('id', 'User ID is required!').not().isEmpty(),
    ]
  }
};

export default UserValidation;