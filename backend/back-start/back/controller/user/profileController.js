/*
  @desc   Get user profile
  @route  GET /api/users/profile
  @access Private
*/
export const getUserProfile = (req, res) => {
  const user = {
    name: 'Dima',
    age: 24,
  };

  res.json(user);
};
