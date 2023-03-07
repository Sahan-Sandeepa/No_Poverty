

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user_model');
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

exports.register= async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

// // Register a new user
// const register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     // const hashedPassword=bcrypt.hashSync(password)
//     encryptedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ email, password:encryptedPassword });
//     // const salt=await bcrypt.genSalt(10)
//     // user.password=await bcrypt.hash(user.password,salt);
//     const token = createToken(user._id)
//     res.status(201).json({ user,token });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

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

// const login= async (req, res) => {

//   // Our login logic starts here
//   try {
//     // Get user input
//     const { email, password } = req.body;

//     // Validate user input
//     if (!(email && password)) {
//       res.status(400).send("All input is required");
//     }
//     // Validate if user exist in our database
//     const user = await User.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       // Create token
//       const token = jwt.sign(
//         { user_id: user._id, email },
//         process.env.TOKEN_KEY,
//         {
//           expiresIn: "2h",
//         }
//       );

//       // save user token
//       user.token = token;

//       // user
//       res.status(200).json(user);
//     }
//     res.status(400).send("Invalid Credentials");
//   } catch (err) {
//     console.log(err);
//   }
//   // Our register logic ends here
// };

// // ...

