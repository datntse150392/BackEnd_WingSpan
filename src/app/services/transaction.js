const transactionSchema = require("../models/transaction.model");
const cartSchema = require("../models/cart.model");

const nodemailer = require("nodemailer");
// Genarate code to active course
const crypto = require("crypto");

// UUID4
const { v4: uuidv4 } = require("uuid");

/**
 * Logic API thực hiện funtion sendMail before customer payment successfully
 */

// Function to generate a random activation code (customize as needed)
const generateActivationCode = () => {
  const codeLength = 12; // You can adjust the length of the activation code as needed

  // Generate a random buffer
  const buffer = crypto.randomBytes(codeLength);

  // Convert the buffer to a hexadecimal string
  const activationCode = buffer
    .toString("hex")
    .toUpperCase()
    .substring(0, codeLength);

  return activationCode;
};
// Function to send an activation email
(sendActivationEmail = async (toEmail, activationCode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "datntse150392@fpt.edu.vn",
      pass: "jjrk tyjo pnap sznp", // Use your App Password or OAuth token
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: "datntse150392@fpt.edu.vn",
    to: toEmail,
    subject: "MÃ KÍCH HOẠT KHÓA HỌC TẠI WINGSPAN",
    html: `
      <p>Xin chào,</p>
      <p>Cảm ơn bạn đã thực hiện thanh toán tại WingSpan. Đây là mã kích hoạt cho khóa học của bạn:</p>
      <p><strong>${activationCode}</strong></p>
      <p>Để kích hoạt tài khoản của mình, hãy sử dụng mã này trong trang kích hoạt trên hệ thống của chúng tôi.</p>
      <p>Trân trọng,<br/>WingSpan Team</p>
    `,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}),
  /**
   * Hanle Logic Servide
   */
  (module.exports = {
    processPaymentAndSaveTransaction: ({
      cartId,
      amount,
      payer,
      transactionType,
      status,
      customerEmail, // Add customer email to the function parameters
    }) =>
      new Promise(async (resolve, reject) => {
        try {
          // Log: Start of the payment process
          console.log(`Processing payment for cartId: ${cartId}`);

          // Get Cart by CartId
          const cartItem = await cartSchema.findById(cartId);
          if (!cartItem) {
            // Log: Cart not found
            console.error(`Cart not found for cartId: ${cartId}`);

            resolve({
              status: 404,
              message: "Not Found Cart",
              data: null,
            });
          }

          // Create new transaction with new data form request
          const newTransaction = new transactionSchema({
            _id: uuidv4(),
            userId: cartItem.userId,
            items: cartItem.items,
            count: cartItem.count,
            amount: amount,
            payer: payer,
            transactionType: transactionType,
            transactionDate: new Date().toDateString(),
            status: status,
          });

          // Generate an activation code (you can use a library like `crypto` or any other method)
          const activationCode = generateActivationCode();

          // Send an email with the activation code
          await sendActivationEmail(customerEmail, activationCode);

          // Log: Saving the new transaction
          console.log("Saving the new transaction...");
          await newTransaction.save();

          // Log: Deleting the cart
          console.log(`Deleting cart with cartId: ${cartId}`);
          await cartSchema.findByIdAndDelete(cartId);

          // Log: Transaction saved successfully
          console.log("Transaction saved successfully");
          resolve({
            status: 200,
            message: "Transaction saved successfully",
            data: { newTransaction },
          });
        } catch (error) {
          // Log: Error during payment process
          console.error(`Error processing payment: ${error.message}`);

          reject({
            status: 500,
            message: error.message,
          });
        }
      }),
  });
