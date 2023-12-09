const createError = require("http-errors");
module.exports = {
  badRequest: (err, res) => {
    const error = createError.BadRequest(err);
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  },

  notFound: (res) => {
    const error = createError.NotFound("This route is not defined");
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  },

  notAuth: (err, res) => {
    const error = createError.Unauthorized(err); // Error 401
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  },

  interalServerError: () => {
    const error = createError.InternalServerError();
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  },
};
