// const express =require('express')
// const router =express.Router();

// const{
//     register,
//     login
// }=require('../controllers/auth_controller');

// router.post('/',register);
// router.post('/',login);

// // router.put('/:id', updateUser);
// // router.delete('/:id', deleteUser);

// module.exports=router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;
