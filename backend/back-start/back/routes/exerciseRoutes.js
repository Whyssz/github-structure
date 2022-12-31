import express from 'express';
import { createNewExerciseLog } from '../controller/exercise/log/createController.js';
import { getExerciseLog } from '../controller/exercise/log/getController.js';
import { updateExerciseLog } from '../controller/exercise/log/updateController.js';
import { createNewExercise } from '../controller/exercise/mainController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createNewExercise);
router
  .route('/log')
  .post(protect, createNewExerciseLog)
  .put(protect, updateExerciseLog);
router.route('/log/:id').get(protect, getExerciseLog);

export default router;
