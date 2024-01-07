const createError = require("http-errors");
module.exports = {
  /**
   *
   * @param {*} err
   * @param {*} res
   * @returns
   * Handler Error 400
   */
  badRequest: (err, res) => {
    const error = createError.BadRequest(err);
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      data: null,
    });
  },

  /**
   *
   * @param {*} res
   * @returns
   * Handler Error 404
   */
  notFound: (res) => {
    const error = createError.NotFound("Not Found");
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

  interalServerError: (err, res) => {
    const error = createError.InternalServerError(err);
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  },
};
