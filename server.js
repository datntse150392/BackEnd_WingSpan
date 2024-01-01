require("dotenv").config();
const cors = require("cors");
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const routers = require("./src/app/routes/index");
const CronJob = require("cron").CronJob; // Assuming you're using the 'cron' package
const chatRoomSchema = require("./src/app/models/chatRoom-model");
const userSchema = require("./src/app/models/user-model");

// Connect to database
const connectDB = require("./src/app/configs/database");
connectDB();
const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // origin: "http://localhost:4200", // Điều chỉnh lại cho phù hợp với client của bạn
    origin: "https://wingspan-dev-course.vercel.app/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRoom", ({ roomId, userId }) => {
    socket.join(roomId);
    console.log(`${userId} joined room ${roomId}`);
  });

  socket.on("sendMessage", async ({ roomId, userId, message }) => {
    const newMessage = { userId, timestamp: new Date(), message };
    io.to(roomId).emit("newMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

/**
 * Vì do sử dụng dịch vụ miễn phí từ render
 * nên phải config thêm cron để máy chủ được chạy 1 phút 1 lần
 */
const job = new CronJob("* * * * *", function () {
  console.log("The server will be activated every 1 minutes");
});
// Don't forget to start the job!
job.start();

// Variable environment
const PORT = process.env.PORT || 3000;

// Khi mà 1 client gửi không phải là một chuỗi json. Ví dụ nó là một object hay một gì đó -> thì dòng 15 sẽ dịch nó ra thành json
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json(), cors());

// Route
routers(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
