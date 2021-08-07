import { Specialization } from "../models/specialization.js";

const MetadataService = {
    getSpecializations: async (req, res) => {
    Specialization.find()
      .exec(function (err, specializations) {
          res.status(200).send({
            data: specializations,
          });
      });
  },
};

export default MetadataService;
