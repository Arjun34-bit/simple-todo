const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
    <title>Sample Api</title>
    </head>
    <body>
    <div style="display:flex;justify-content:center;align-items:center;height:90vh">
    <h1 style="color: blue; ">Welcome to Paycell-api</h1>
    </div></body>
    </html>
    `);
});

//Routes for User Authentication and Authorization
app.use("/user", userRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
