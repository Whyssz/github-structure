import express from 'express';
import { getUserProfile } from '../controller/user/profileController.js';
import { registerUser } from '../controller/user/reqController.js';

const router = express.Router();

router.route('/profile').get(getUserProfile);
router.route('/').post(registerUser);

export default router;
