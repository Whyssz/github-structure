import express from 'express';
import { createNewExerciseLog } from '../controller/exercise/log/createController.js';
import { getExerciseLog } from '../controller/exercise/log/getController.js';
import {
  updateCompletedExercises,
  updateExerciseLog,
} from '../controller/exercise/log/updateController.js';
import {
  createNewExercise,
  deleteExercise,
  updateExercise,
} from '../controller/exercise/mainController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(protect, createNewExercise)
  .put(protect, updateExercise)
  .delete(protect, deleteExercise);

router
  .route('/log')
  .post(protect, createNewExerciseLog)
  .put(protect, updateExerciseLog);

router.route('/log/completed').put(protect, updateCompletedExercises);

router.route('/log/:id').get(protect, getExerciseLog);

export default router;
