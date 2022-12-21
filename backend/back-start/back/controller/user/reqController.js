import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
// import asyncHandler from 'express-async-handler'

/*
  @desc   Register user
  @route  POST /api/users
  @access Public
*/
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const isHaveUser = await User.findOne({ email });

  if (isHaveUser) {
    res.status(400);
    throw new Error('Данный пользователь уже зарегистрирован');
  }

  const user = await User.create({
    email,
    password,
  });

  res.json(user);
});
