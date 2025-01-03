const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const testSeriesRouter = require("./routes/test-series.routes");
const userRouter = require("./routes/user.routes");
const courseRouter = require("./routes/course.routes")


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api/v1", testSeriesRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);




module.exports = app;
