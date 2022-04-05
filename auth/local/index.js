const { Router } = require('express');

const { handlerLoginUser } = require('./local.controller');

const router = Router();

// /auth/local/login
router.post('/', handlerLoginUser);
// /auth/local/forgot-password
// /auth/local/verify-account

module.exports = router;
