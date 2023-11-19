require("dotenv").config();
const cors = require("cors");
const createProxyMiddleware = require("http-proxy-middleware");
const express = require("express");
const routers = require("./app/routes");
// Kết nối đến MongoDB
const connectDB = require("./app/configs/database");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json(), cors());
connectDB();
// Gắn các route
routers(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
