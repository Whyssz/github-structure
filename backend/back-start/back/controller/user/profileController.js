import asyncHandler from 'express-async-handler';
import ExerciseLog from '../../models/exercise/exerciseLogModel.js';
import User from '../../models/userModel.js';

/*
  @desc   Get user profile
  @route  GET /api/users/profile
  @access Private
*/
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');

  const exerciseLogByUser = await ExerciseLog.find({
    user: user._id,
    completed: true,
  });

  

  res.json(user);
});
