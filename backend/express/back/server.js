import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import colors from 'colors';
// import colors from 'colors';

// Config
import { connectDB } from './config/db.js';
// Middleware
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
// Routes
import exerciseRoutes from './routes/exerciseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import workoutRoutes from './routes/workoutRoutes.js';

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
app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);

// middleware config
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
