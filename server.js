require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routers = require("./src/app/routes/index");
// Kết nối đến MongoDB
const connectDB = require("./src/app/configs/database");
connectDB();
const app = express();
// Khi mà 1 client gửi không phải là một chuỗi json. Ví dụ nó là một object hay một gì đó -> thì dòng 15 sẽ dịch nó ra thành json

// App constants
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json(), cors());

// Gắn các route
routers(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
