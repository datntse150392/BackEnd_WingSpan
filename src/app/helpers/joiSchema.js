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

const deleteCartJoiSchema = Joi.object({
  cartId: Joi.string().required(),
  itemId: Joi.string().required(),
});

const transactionJoiSchema = Joi.object({
  cartId: Joi.string().required(),
  amount: Joi.number().required(),
  payer: Joi.object().required(),
  transactionType: Joi.string().required(),
  status: Joi.string().required(),
  customerEmail: Joi.string().email().required(),
});

module.exports = {
  userJoiSchema,
  userJoiSchemaForSignUp,
  cartJoiSchema,
  addToCartJoiSchema,
  deleteCartJoiSchema,
  transactionJoiSchema,
};
