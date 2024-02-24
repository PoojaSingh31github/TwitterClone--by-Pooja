const userModel = require("../models/user_m");
const postModel = require("../models/post_m");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

exports.Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    console.log(res.body);
    if (!name || !username || !password || !email) {
      return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    const userInDB = await userModel.findOne({ email: email });
    if (userInDB) {
      return res.status(500).json({ error: "User with this email is already registered" });
    }
    const hashedpassword = await bcryptjs.hash(password, 10);
    const user = new userModel({ name, username, email, password: hashedpassword });
    const newUser = await user.save();
    if (newUser) {
      return res.status(201).json({ result: "User Signed up successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "User registration is failed" });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }

    const userInDB = await userModel.findOne({ email: email });

    if (!userInDB) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const didMatch = await bcryptjs.compare(password, userInDB.password);

    if (didMatch) {
      const jwtToken = jwt.sign({ _id: userInDB._id }, jwtSecret);
      const userInfo = { "email": userInDB.email, "fullname": userInDB.fullname, "id": userInDB._id, "isadmin": userInDB.isAdmin };

      return res.status(200).json({ result: { token: jwtToken, user: userInfo, message: "user successfully login" } });
    } else {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
};
// profile page 
exports.GetallUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.GetuserByID = async (req, res) => {
  try {
    const ID = req.params['id'];
    const user = await userModel.findById(ID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.UpdateUserbyID = async (req, res) => {
  try {
    const ID = req.params['id'];
    const user = await userModel.findByIdAndUpdate(ID, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.Followuser = async (req, res) => {

}
exports.UnfollowUser = async (req, res) => {

}
exports.Getusertweets = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const tweets = await postModel.find({ author: userId })
      .populate('author', 'name') // Populate author details (optional)
      .exec();
    return res.status(200).json({ result: tweets, message: "user all tweets" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.GetUserRetweets = async (req, res) => {
 try {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const retweets = await postModel.find({ retweetedBy: userId })
      .populate('author') // Populate author details
      .populate('retweetedBy', 'name username'); // Populate retweetedBy details with selected fields
    res.status(200).json({ user, retweets });
 } catch (error) {
  console.log(error);
  return res.status(500).json({ message: 'Internal Server Error' });
 }
}



