const userSchema = require("../models/user.model");

// Bcrypt để sử dụng để mã hóa mật khẩu, và mật khẩu này chỉ được mã hóa 1 chiều
const bcrypt = require("bcrypt");
const hashedPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

// json web token: Giả sử như phía sever cần một số thông tin khi BE xử lý, ví dụ khi có một user đăng kí tài khoản mới thì bên FE muốn nhận 1 số thông tin như email để có thể phân quyền...
const jwt = require("jsonwebtoken");

// UUID4
const { v4: uuidv4 } = require("uuid");

/*
Handle Logic Service 
*/
module.exports = {
  signIn: ({ email }) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await userSchema.findOne({ email });
        if (response) {
          const token = response
            ? jwt.sign(
                {
                  _id: response._id,
                  email: response.email,
                  fullName: response.fullName,
                  profileImage: response.profileImage,
                  dateOfBirth: response.dateOfBirth,
                },
                process.env.JWT_SECRET,
                { expiresIn: "5d" }
              )
            : null;

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

  signUp: ({ email, fullName, profileImage }) =>
    new Promise(async (resolve, reject) => {
      try {
        // Create new user with new data from request
        const newUser = new userSchema({
          _id: uuidv4(),
          email: email,
          fullName: fullName,
          profileImage: profileImage,
          dateOfBirth: "",
          enrolledCourses: [],
        });

        const response = await newUser.save();
        if (response) {
          const token = response
            ? jwt.sign(
                {
                  _id: response._id,
                  email: response.email,
                  fullName: response.fullName,
                  profileImage: response.profileImage,
                  dateOfBirth: response.dateOfBirth,
                },
                process.env.JWT_SECRET,
                { expiresIn: "5d" }
              )
            : null;

          resolve({
            status: 200,
            access_token: token && `Bearer ${token}`,
          });
        }
      } catch (error) {
        reject(error);
      }
    }),
};
