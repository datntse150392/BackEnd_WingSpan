const userSchema = require("../models/user.model");
// Bcrypt để sử dụng để mã hóa mật khẩu
const bcrypt = require("bcrypt");
const hashedPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// json web token: Giả sử như phía sever cần một số thông tin khi BE xử lý, ví dụ khi có một user đăng kí tài khoản mới thì bên FE muốn nhận 1 số thông tin như email để có thể phân quyền...
const jwt = require("jsonwebtoken");

/*
Handle Logic Service 
*/

module.exports = {
  signin: ({ email, password }) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await userSchema.findOne({ email });
        if (response) {
          const isCheckPassword = response;
          // && bcrypt.compareSync(password, response.password);
          const token = isCheckPassword
            ? jwt.sign(
                {
                  ...response,
                },
                process.env.JWT_SECRET,
                { expiresIn: "5d" }
              )
            : "";

          resolve({
            status: 200,
            access_token: token && `Bearer ${token}`,
          });
        }
        resolve({
          status: 404,
          message: "Not Found",
        });
      } catch (error) {
        reject(error);
      }
    }),
};
