import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt
    if (!token) {
      return req.status(401).send({ msg: "You are not logged in" });
    }
    const decoded = jwt.verify(token,process.env.JWT_KEY)
    if(!decoded)
    {
        return res.status(401).json("Invalid Token")

    }
    const user = await User.findById(decoded.userId).select("password")

    if(!user)
    {
        return req.status(401).send({ msg: "No user found"});
    }

    req.user  = user
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};


export default protectRoute