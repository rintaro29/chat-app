const express = require("express");
const app = express();
const port = 5000;
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
const cors = require("cors");

require("dotenv").config();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
