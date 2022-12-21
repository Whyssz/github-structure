import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import colors from 'colors';

import userRoutes from './routes/userRoutes.js';

// controller for all
dotenv.config();

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
