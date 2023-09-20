const express = require("express");
const dotenv = require("dotenv");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE + "/NotesApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/v1/notes", noteRouter);
app.use("/api/v1/users", userRouter);

//Global error handler

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "something went wrong";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

//404 Not found 

app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: "error",
    message: "Page not found",
  });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,  and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
