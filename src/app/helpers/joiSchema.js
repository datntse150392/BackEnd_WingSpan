const joi = require("joi");

module.exports = {
  email: joi.string().pattern(new RegExp("gmail.com$")).required(),
  const: joi.string().min(6).required(),
};
