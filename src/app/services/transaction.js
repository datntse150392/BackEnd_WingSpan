const transactionSchema = require("../models/transaction.model");
const cartSchema = require("../models/cart.model");
const codeSchema = require("../models/code.model");

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
const sendActivationEmail = async (toEmail, activationCodes, courseNames) => {
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
      <style>
        /* Add any custom styling here */
        body {
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
        }
        .logo {
          max-width: 100px;
        }
      </style>
      <div class="container">
        <h2>WingSpan</h2>
        <p>Xin chào,</p>
        <p>Cảm ơn bạn đã thực hiện thanh toán tại WingSpan</p>
        <h3>Đây là mã kích hoạt cho khóa học của bạn:</h3>
        <ul>
          ${activationCodes
            .map(
              (code, index) =>
                `<li>${courseNames[index]}: <strong>${code}</strong></li>`
            )
            .join("\n")}
        </ul>
        <p>Để kích hoạt tài khoản của mình, hãy sử dụng mã này trong <a href="https://wingspan-dev-course.vercel.app/">trang kích hoạt</a> trên hệ thống của chúng tôi.</p>
        <p>Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ chúng tôi qua <a href="https://wingspan-dev-course.vercel.app/">đường dẫn hỗ trợ</a>.</p>
        <p>Trân trọng,<br/>WingSpan Team</p>
      </div>
    `,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};
/**
 * Hanle Logic Servide
 */
module.exports = {
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
        const activationCodes = [];
        const courseNames = [];
        // Loop through items in the cart to generate activation codes
        for (const item of cartItem.items) {
          const activationCode = generateActivationCode();

          // You can associate the activationCode with the item or transaction as needed
          const newCode = new codeSchema({
            _id: uuidv4(),
            code: activationCode,
            courseId: item._id, // Assuming each item has a unique courseId
            userId: cartItem.userId,
            transactionId: newTransaction._id,
            createAt: new Date().toDateString(),
            status: "Deactive",
            // Add other properties as needed
          });
          await newCode.save();
          // Save activation code to the "code" database table

          // For example, you can save it to the database or include it in the response
          courseNames.push(item.title);
          // Add activation code to the array
          activationCodes.push(activationCode);
        }
        console.log(activationCodes);

        // Send a single activation email with both codes
        await sendActivationEmail(customerEmail, activationCodes, courseNames);

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
};
