const express = require('express');
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  confirmEmail,
} = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);
router.post('/logout', logout);
router.post('/me', getMe);
router.post('/confirmemail', confirmEmail);
router.post('/updatedetails', protect, updateDetails);
router.post('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword/:resettoken', resetPassword);

module.exports = router;
