const codeService = require("../services/code-service/code");
const { codeActiveSchema } = require("../helpers/joiSchema");
const { badRequest } = require("../middlewares/handleError");

module.exports = {
  /**
   * Logic code API - Active Course
   */
  activeCourse: async (req, res) => {
    try {
      // Validate the data
      const { error } = codeActiveSchema.validate(req.body);

      if (error) {
        return badRequest(error, res);
      }

      const response = await codeService.activeCourse(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
};
