import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import colors from 'colors';
// import colors from 'colors';

import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// controller for all
dotenv.config();
mongoose.set('strictQuery', false);

connectDB();

const app = express();

// friendly terminal
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// friendly server
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
