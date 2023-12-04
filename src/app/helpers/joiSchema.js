const Joi = require("joi");

const userJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
});

module.exports = { userJoiSchema };
