const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./Routes/routes");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Connection to database failed");
    else {
      console.log("Database is successfully connected");
    }
  }
);

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(8000, () => {
  console.log("The server is up and running");
});
