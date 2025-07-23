// require('dotenv').config({path:'./env'})      isko use nhi karenge shi hai but code consitency kharab kar det ahai 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:'./env'});
connectDB()