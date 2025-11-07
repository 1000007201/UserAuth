import express from "express";
import connectdb from "./dbConfig.js";
import dotenv from 'dotenv';
import userRoutes from "./Routes/userRoutes.js";

// To use .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Connecting to MongoDB
connectdb();

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
});