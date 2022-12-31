import express from 'express';
import { addNewExerciseLog } from '../controller/exercise/logController.js';
import { addNewExercise } from '../controller/exercise/mainController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addNewExercise);
router.route('/log').post(protect, addNewExerciseLog);

export default router;
