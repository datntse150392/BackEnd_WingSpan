require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routers = require("./src/app/routes/index");
const CronJob = require("cron").CronJob; // Assuming you're using the 'cron' package

// Connect to database
const connectDB = require("./src/app/configs/database");
connectDB();
const app = express();

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
