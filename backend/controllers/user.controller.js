import User from "../models/user.model.js";

export const getUsersFunction = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //filter out ourself from the user list
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } });

    return res.status(201).json(allUsers);
  } catch (error) {
    res.status(500).json("Error");
  }
};
