const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const path = require("path");

// routes
const landingRoutes = require("./modules/landing/landing.route");
const pageRoutes = require("./modules/pages/page/page.route");
const spRoutes = require("./modules/pages/subPage/sp.route");
const globalRoutes = require("./modules/global/global.route");
const categoryRoutes = require("./modules/category/category.route");
const reviewRoutes = require("./modules/review/review.route");

const app = express();
const http = require("http");
const Server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 500000 })
);

connectDB();

// routes
app.use("/api/v1/global", globalRoutes);
app.use("/api/v1/landing", landingRoutes);

app.use("/api/v1/pages", pageRoutes);
app.use("/api/v1/sp", spRoutes);

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/reviews", reviewRoutes);

// static file serving
app.use("/api/v1/uploads", express.static(path.join(__dirname, "/")));

// -----------------socket server-----------------

// testing api
app.get("/", (req, res) => {
  res.send("Server is running");
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
