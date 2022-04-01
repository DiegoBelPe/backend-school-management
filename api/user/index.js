const { Router } = require('express');
const { route } = require('express/lib/application');

const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
} = require('./user.controller');

const router = Router();

router.post('/', handlerCreateUser);
router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.delete('/:id')
router.patch('/id')

module.exports = router;
