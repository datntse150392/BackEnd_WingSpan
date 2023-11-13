require("dotenv").config();
const express = require("express");
const routers = require("./src/app/routes");
// Kết nối đến MongoDB
const connectDB = require("./src/app/configs/database");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
connectDB();
// Gắn các route
routers(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
