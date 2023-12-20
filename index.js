const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

const mongoDB = require("./db");
mongoDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`listening ${port}`);
});
