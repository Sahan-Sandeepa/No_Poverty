// const User = require('../models/user_model')
// const jwt = require('jsonwebtoken')

// const createToken = (_id) => {
//   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
// }

// // login a user
// const loginUser = async (req, res) => {
//   const {email, password} = req.body

//   try {
//     const user = await User.login(email, password)

//     // create a token
//     const token = createToken(user._id)

//     res.status(200).json({email, token})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// }

// // signup a user
// const signupUser = async (req, res) => {
//   const {email, password} = req.body

//   try {
//     const user = await User.signup(email, password)

//     // create a token
//     const token = createToken(user._id)

//     res.status(200).json({email, token})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// }

// module.exports = { signupUser, loginUser }

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user_model');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
