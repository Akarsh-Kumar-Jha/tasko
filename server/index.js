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

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://tasko-frontend-p3y7.onrender.com",
    "https://tasko-frontendnew.onrender.com",
    "https://tasko-backendnew.onrender.com/api/v1/"
  ],
  credentials: true,
};
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));


app.use('/api/v1', taskRoutes);
app.use('/api/v1/user',userRoutes);

app.listen(3000, () => {
  console.log("Server Started!");
});
