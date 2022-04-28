const { Router } = require('express');

const { handlerCheckout } = require('./checkout.controller')

const router = Router();


router.post('/api/checkout', handlerCheckout);

module.exports = router;
