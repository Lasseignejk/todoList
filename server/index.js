require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

app.use(express.json());

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/note", noteRoutes);

app.listen(port, console.log(`Listening on port ${port}`));
