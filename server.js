const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const path = require("path");

// routes
const landingRoutes = require("./modules/landing/landing.route");

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
app.use("/api/v1/landing", landingRoutes);

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
