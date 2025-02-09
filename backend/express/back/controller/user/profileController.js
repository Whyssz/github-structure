import asyncHandler from 'express-async-handler';
import ExerciseLog from '../../models/exercise/exerciseLogModel.js';
import User from '../../models/userModel.js';
import WorkoutLog from '../../models/workout/workoutLogModel.js';

/*
  @desc   Get user profile
  @route  GET /api/users/profile
  @access Private
*/
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password').lean();

  const exerciseLogByUser = await ExerciseLog.find({
    user: user._id,
    completed: true,
  });

  let countExerciseTimes = 0;
  let kgs = 0;

  exerciseLogByUser.forEach((log) => {
    countExerciseTimes += log.times.length;

    log.times.forEach((item) => {
      kgs += item.weight;
    });
  });

  const minutes = Math.ceil(countExerciseTimes * 2.3);

  const workouts = await WorkoutLog.find({
    user: user._id,
    completed: true,
  }).countDocuments();

  res.json({ ...user, minutes, workouts, kgs });
});
