import express from 'express';
import { authUser } from '../controller/user/authController.js';
import { getUserProfile } from '../controller/user/profileController.js';
import { registerUser } from '../controller/user/reqController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/profile').get(protect, getUserProfile);
router.route('/login').post(authUser);
router.route('/').post(registerUser);

export default router;