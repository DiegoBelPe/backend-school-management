const { Router } = require('express');

const { handlerLoginUser, handlerVerifyAccount } = require('./local.controller');

const router = Router();

// /auth/local/login
router.post('/', handlerLoginUser);
// /auth/local/forgot-password
router.get('/verify-account/:token', handlerVerifyAccount);

module.exports = router;
