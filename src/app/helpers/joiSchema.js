const Joi = require("joi");

const userJoiSchema = Joi.object({
  email: Joi.string().email().required(),
});

const userJoiSchemaForSignUp = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
});

const cartJoiSchema = Joi.object({
  userId: Joi.string().required(),
});

const addToCartJoiSchema = Joi.object({
  userId: Joi.string().required(),
  courseId: Joi.string().required(),
});

const transactionJoiSchema = Joi.object({
  cartId: Joi.string().required(),
  amount: Joi.string().required(),
  payer: Joi.string().required(),
  transactionType: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = {
  userJoiSchema,
  userJoiSchemaForSignUp,
  cartJoiSchema,
  addToCartJoiSchema,
  transactionJoiSchema,
};
