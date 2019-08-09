import db from './../db/models';

const userController = {};

userController.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = db.User.createUser(email, password);

    return res.status(200).json({
      result: user,
    });
  } catch (err) {
    return res.status(200).json({
      error: err.toString(),
    });
  }
}

export default userController;