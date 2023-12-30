const userSchema = require("../../models/user-model");

module.exports = {
  getUserByUserId: ({ _id }) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await userSchema.findById(_id);
        if (!user) {
          resolve({
            status: 404,
            message: "Not Found",
          });
        }
        resolve({
          status: 200,
          data: { user },
        });
      } catch (error) {
        reject(error);
      }
    }),
};
