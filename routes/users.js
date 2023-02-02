const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

console.log('user router loaded');
router.get('/profile', usersConrtoller.profile);

router.get('/sign-in',usersConrtoller.signIn);
router.get('/sign-up',usersConrtoller.signUp);
router.post('/create',usersConrtoller.create);

module.exports = router;