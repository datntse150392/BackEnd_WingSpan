const cartSchema = require("../models/cart.model");
const courseSchema = require("../models/course.model");
// UUID4
const { v4: uuidv4 } = require("uuid");
module.exports = {
  getCartItems: async ({ userId }) =>
    new Promise(async (resolve, reject) => {
      try {
        const cartItem = await cartSchema.findOne({ userId: userId });

        if (!cartItem) {
          resolve({
            status: 404,
            message: "Not Found",
          });
        }

        resolve({
          status: 200,
          data: { cartItem },
        });
      } catch (error) {
        reject(error);
      }
    }),

  /**
   * Service Func add item(course) to cart
   */
  addToCart: async ({ userId, courseId }) =>
    new Promise(async (resolve, reject) => {
      try {
        let cartItem = await cartSchema.findOne({ userId: userId });
        // Check course
        const course = await courseSchema.findById(courseId);
        if (!course) {
          return res.status(404).json({
            status: 404,
            message: "Course not found",
          });
        }

        if (cartItem) {
          if (cartItem.items.some((item) => item._id == courseId)) {
            resolve({
              status: 400,
              message: "Course was contained in cart",
            });
          } else {
            // Add course item to cart
            cartItem.items.push({ ...course.toObject() });
            cartItem.count++;
            // Save cart
            await cartItem.save();
            // Successfully saved user and course
            console.log("Add to cart successful.");
            resolve({
              status: 200,
              message: "Add to cart successful",
              data: { cartItem },
            });
          }
        } else {
          // Create a new cart item

          cartItem = new cartSchema({
            _id: uuidv4(),
            userId: userId,
            items: [], // Initialize items array
            count: 1, // Initialize items count
          });
          // Add course item to cart
          cartItem.items.push({ ...course.toObject() });
          // Save cart
          await cartItem.save();
          resolve({
            status: 200,
            message: "Add to cart successful",
            data: { cartItem },
          });
        }
      } catch (error) {
        reject(error);
      }
    }),
};
