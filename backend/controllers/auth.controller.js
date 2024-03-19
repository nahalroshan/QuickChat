import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import generateTokenandCookies from "../utils/generateToken.js";
// Function for user signup
export const signup = async (req, res) => {
  
  try {
    console.log("Starting");
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json("Passwords do not match");
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json("Username already exists");
    }
    const salt = await bcryptjs.genSalt(10)
    const hashedpassword = await bcryptjs.hash(password,salt)
    const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
   const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const newUser = new User({
      fullname,
      username,
      gender,
      password:hashedpassword,
      profilepic: gender === "male" ? boypic : girlpic,
    });
    if (newUser) {
         generateTokenandCookies(newUser._id , res)
        await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilepic: newUser.profilepic,
     //password:newUser.password
    });
    console.log("Ended");
    } else {
        res.status(500).send("Error occurred");
    }
    
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

// Function for user logout
export const logout = (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json("Logged out successfully");
    } catch (error) {
        res.status(500).json("Error  occurred while logging out")
    }
};

export const login = async (req, res) => {
  const {username , password,fullname} = req.body
  const user = await  User.findOne({username});
  const  isPasswordValid =  bcryptjs.compare(password,user?.password || "")
  if(!user || !isPasswordValid){
    console.log("Error in logging in");
    return res.status(400).json( 'Username or Password is incorrect')
  }
  else
  {
    console.log(" logging in");
  }
  generateTokenandCookies(user._id ,res)
  res.status(200).send(`Login Successful,Welcome ${user.fullname}`);
};
