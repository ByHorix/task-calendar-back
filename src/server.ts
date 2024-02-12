import express from "express";
import process from "process";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cors());

// const mongoose = require('mongoose');
// require('dotenv').config();


const PORT = process.env.PORT || 9000;
const DB_URL = process.env.MONGODB_CONNECTION !;

mongoose.connect(DB_URL)
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`)
        });
    })
    .catch((error) => console.log(error));

mongoose.connection.on('error', (error: Error) => console.log(error));
