require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routers = require("./app/routes");
// Kết nối đến MongoDB
const connectDB = require("./app/configs/database");
const app = express();
// Khi mà 1 client gửi không phải là một chuỗi json. Ví dụ nó là một object hay một gì đó -> thì dòng 15 sẽ dịch nó ra thành json
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json(), cors());
connectDB();
// Gắn các route
routers(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
