const Joi = require("joi");

const userJoiSchema = Joi.object({
  email: Joi.string().email().required(),
});

const userJoiSchemaForSignUp = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  profileImage: Joi.string().required(),
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

const codeAddSchema = Joi.object({});

const codeActiveSchema = Joi.object({
  userId: Joi.string().required(),
  code: Joi.string().required(),
});

const transactionJoiSchema = Joi.object({
  cartId: Joi.string().required(),
  amount: Joi.number().required(),
  payer: Joi.object().required(),
  transactionType: Joi.string().required(),
  status: Joi.string().required(),
  customerEmail: Joi.string().email().required(),
  voucherId: Joi.string(),
});

const blogJoiSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.object().required(),
});

module.exports = {
  userJoiSchema,
  userJoiSchemaForSignUp,
  cartJoiSchema,
  addToCartJoiSchema,
  deleteCartJoiSchema,
  transactionJoiSchema,
  codeActiveSchema,
  blogJoiSchema,
};
