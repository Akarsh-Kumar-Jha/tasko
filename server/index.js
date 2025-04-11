const express = require('express');
const app = express();
const { dbConnection } = require('./config/dbConnection');
const taskRoutes = require('./routes/taskroutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path');

dbConnection();

app.use(express.json());
app.use(cookieParser());


const allowedOrigins = [
  'http://localhost:5173',
  'https://tasko-frontend-p3y7.onrender.com',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use('/api/v1', taskRoutes);
app.use('/api/v1/user',userRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.listen(3000, () => {
  console.log("Server Started!");
});
