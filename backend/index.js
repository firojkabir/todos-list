require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { router } = require("./routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { authRouter } = require("./routes/auth.route");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL).then(
  () => {
    console.log("Connected");
  },
  (err) => {
    console.log("Error");
  }
);

app.use(cors());
app.use(express.json());
app.use(morgan("short"));
app.use("/auth", authRouter);

// app.post('/github', (req, res) => {
// 	console.log('Received a request from Github', req.body)
// 	res.json()
// })

app.use(authMiddleware);
app.use("/", router);
app.use(errorHandler);

module.exports = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
